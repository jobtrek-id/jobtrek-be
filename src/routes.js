const express = require("express");
const router = express.Router();
const controller = require("./controller");

// define the home page route
router.get("/", controller.endpoint);

// define the job routes
router.post("/job/select", controller.jobSelect);
router.post("/job/delete", controller.jobDelete);
router.post("/job/update", controller.jobUpdate);
router.post("/job/insert", controller.jobInsert);

router.post("/user", controller.user);

module.exports = router;
