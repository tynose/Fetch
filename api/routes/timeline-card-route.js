const express = require("express");
const router = express.Router();
const timelineCardController = require("../controllers/timeline-card-controllers");

// --- timeline-card routes -- //

router.get("/", timelineCardController.timelineCardsAll);

router.get("/:id", timelineCardController.timelineCards);

router.post("/create", timelineCardController.timelineCardCreate);

router.put("/:id/update", timelineCardController.timelineCardUpdate);

router.delete("/:id/delete", timelineCardController.timelineCardDelete);

module.exports = router;
