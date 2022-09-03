// Models
const { Registration } = require('../models/registration.model');

const getAllRegistration = async (req, res) => {
  try {
    const registration = await Registration.findAll();
    res.status(200).json({
      status: 'success',
      registration,
    });
  } catch (err) {
    console.log(err);
  }
};

const getRegistrationById = async (req, res) => {
  const { id } = req.params;
  const registration = await Registration.findOne({ where: { id } });

  if (!registration) {
    return res.status(404).json({
      status: 'error',
      message: 'Registration not found',
    });
  }
  res.status(200).json({
    status: 'success',
    registration,
  });
};

const createRegistration = async (req, res) => {
  try {
    const { entranceTime } = req.body;
    const newRegistration = await Registration.create({
      entranceTime,
    });
    res.status(201).json({
      status: 'Register Created',
      newRegistration,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateRegistration = async (req, res) => {
  const { id } = req.params;
  const registration = await Registration.findOne({ where: { id } });

  if (!registration) {
    return res.status(404).json({
      status: 'error',
      message: 'Registration not found',
    });
  }

  res.status(204).json({ status: 'Register Update', registration });
  await registration.update({ exitTime: new Date(), status: 'out' });
};

const deleteRegistration = async (req, res) => {
  const { id } = req.params;
  const registration = await Registration.findOne({ where: { id } });

  if (!registration) {
    return res.status(404).json({
      status: 'error',
      message: 'Delete not found',
    });
  }

  await registration.update({ status: 'cancelled' });
  res.status(204).json({ status: 'success' });
};

module.exports = {
  getAllRegistration,
  getRegistrationById,
  createRegistration,
  updateRegistration,
  deleteRegistration,
};
