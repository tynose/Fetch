const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile-controllers");

// --- profiles -- //

router.get('/', profileController.profiles);

router.post('/signup', profileController.profileSignup);

router.get('/:id', profileController.profileLogin);

router.put('/:id/update', profileController.profileUpdate);

router.delete('/:id/delete', profileController.profileDelete);



module.exports = router;