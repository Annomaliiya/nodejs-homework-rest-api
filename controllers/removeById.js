const createError = require("http-errors");
const contacts = require("../models/contacts");

const removeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contacts.removeById(id);
    if (!result) {
      throw createError(404, "Not found");
    }
    res.json({
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
