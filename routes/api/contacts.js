const express = require("express");

const { ctrlWrapper, validation } = require("../../middleware");
const contactSchema = require("../../schemas/contact");
const ctrl = require("../../controllers");

const router = express();

router.get("/", ctrlWrapper(ctrl.getAllContacts));

router.get("/:id", ctrlWrapper(ctrl.getContactById));

router.post("/", validation(contactSchema), ctrlWrapper(ctrl.addContact));

router.put("/:id", validation(contactSchema), ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

module.exports = router;
