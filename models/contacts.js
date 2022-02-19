const { Schema, model } = require("mongoose");

const contactSchema = Schema({
  name: {
    type: String,
    required: [true, "Set name for contact"],
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  favorite: {
    type: Boolean,
    default: false,
  },
});

const Contact = model("contact", contactSchema);

module.exports = Contact;

// const fs = require("fs/promises");

// const path = require("path");

// const { v4 } = require("uuid");

// const contactsPath = path.join(__dirname, "contacts.json");

// const updateContacts = async (contacts) => {
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
// };

// const updateContactById = async (contactId, body) => {
//   const contactsArray = await listContacts();
//   const idx = contactsArray.findIndex((contact) => contact.id === contactId);
//   if (idx === -1) {
//     return null;
//   }
//   contactsArray[idx] = { ...body, contactId };
//   await updateContacts(contactsArray);
//   return contactsArray[idx];
// };

// const listContacts = async () => {
//   const data = await fs.readFile(contactsPath);
//   const contactsArray = JSON.parse(data);
//   return contactsArray;
// };

// const getContactById = async (contactId) => {
//   const contactsArray = await listContacts();
//   const contact = contactsArray.find((contact) => contact.id === contactId);
//   if (!contact) {
//     return null;
//   }
//   return contact;
// };

// const removeContact = async (contactId) => {
//   const contactsArray = await listContacts();
//   const removedById = contactsArray.find((contact) => contact.id === contactId);
//   if (!removedById) {
//     return null;
//   }
//   const contactsAfterRemoval = contactsArray.filter(
//     (contact) => contact.id !== contactId
//   );
//   await updateContacts(contactsAfterRemoval);

//   return removedById;
// };

// const addContact = async (name, email, phone) => {
//   const contactsArray = await listContacts();
//   const newContact = {
//     id: v4(),
//     name,
//     email,
//     phone,
//   };
//   contactsArray.push(newContact);
//   await updateContacts(contactsArray);
//   return newContact;
// };

// const contacts = {
//   listContacts,
//   updateContactById,
//   getContactById,
//   removeContact,
//   addContact,
// };

// module.exports = contacts;
