const express = require("express");
const router = express.Router();
const detailsControllers = require("../controllers/details-controllers");

// --- details routes -- //

router.get("/:id", detailsControllers.details);

router.post("/create", detailsControllers.detailsCreate);

router.put("/:id/update", detailsControllers.detailsUpdate);

router.delete("/:id/delete", detailsControllers.detailsDelete);

module.exports = router;