const createError = require("http-errors");

const Contact = require("../models/contacts");

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw createError(404, "Not found");
  }
  res.json(result);
};

module.exports = getContactById;
