const express = require("express");
const router = express.Router();
const recordController = require("../controllers/record-controllers");

// --- record routes -- //

router.get("/", recordController.recordsAll);

router.post("/create", recordController.recordCreate);

router.post("/request", recordController.recordRequest);

router.get("/:id", recordController.records);

router.put("/:id/update", recordController.recordUpdate);

router.delete("/:id/delete", recordController.recordDelete);

module.exports = router;
