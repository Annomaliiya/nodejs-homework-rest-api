const createError = require("http-errors");

const contacts = require("../models/contacts");

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.updateById(id, req.body);
  if (!result) {
    throw createError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateById;
