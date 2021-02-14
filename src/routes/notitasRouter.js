const express = require ("express");
const router = express.Router();

const notitasController = require("../controllers/notitasController");

router.get("/", notitasController.index);
router.delete("/:id", notitasController.delete);
router.put("/", notitasController.create);

router.put('/:id/detail', notitasController.update);
router.get("/:id/edit", notitasController.edit);

module.exports = router;