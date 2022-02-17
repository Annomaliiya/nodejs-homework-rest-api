const express = require("express");

const { ctrlWrapper, validation } = require("../../middleware");
const { contactSchema, updateContactSchema } = require("../../schemas/contact");
const ctrl = require("../../controllers");

const router = express();

router.get("/", ctrlWrapper(ctrl.getAllContacts));

router.get("/:id", ctrlWrapper(ctrl.getContactById));

router.post("/", validation(contactSchema), ctrlWrapper(ctrl.addContact));

router.put("/:id", validation(contactSchema), ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

router.patch(
  "/:id/favorite",
  validation(updateContactSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;
