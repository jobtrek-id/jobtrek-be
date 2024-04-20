const express = require("express");
const router = express.Router();
const controller = require("./controller");

// define the home page route
router.get("/", controller.endpoint);

// define the user routes
router.post("/user", controller.user);

// define the job routes
router.post("/job/select", controller.jobSelect);
router.post("/job/delete", controller.jobDelete);
router.post("/job/update", controller.jobUpdate);
router.post("/job/insert", controller.jobInsert);

module.exports = router;
