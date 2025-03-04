const createError = require("http-errors");

const Contact = require("../models/contacts");

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw createError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateStatusContact;
