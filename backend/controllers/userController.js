const admin = require('../services/firebaseAdmin');

const createUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const userRecord = await admin.auth().createUser({ email, password });
    res.status(201).json({ userId: userRecord.uid, role });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    const { id } = req.params;
    await admin.auth().setCustomUserClaims(id, { role });
    res.status(200).send('Role updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { createUser, updateUserRole };