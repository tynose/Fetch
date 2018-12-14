const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile-controllers");

// --- profile routes -- //

router.get("/", profileController.profiles);

router.get("/me", profileController.authorize, profileController.loggedInProfile);

router.post("/signup", profileController.profileSignup);

router.post("/login", profileController.profileLogin);

router.put("/:id/update", profileController.profileUpdate);

router.delete("/:id/delete", profileController.profileDelete);

module.exports = router;















