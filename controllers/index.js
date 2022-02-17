const getAllContacts = require("./getAllContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const updateById = require("./updateById");
const removeById = require("./removeById");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateById,
  removeById,
  updateStatusContact,
};
