const express = require("express");
const router = express.Router();
const db = require("../config/db");

// define the home page route
router.get("/", (req, res) => {
   res.send("The API is Running");
});

router.get("/example", async (req, res) => {
   db.query("SELECT * FROM user", function (err, results, fields) {
      res.json({ user: results });
   });
});

router.get("/job/select", async (req, res) => {
   try {
      const data = await db.promise().query(`SELECT * from user;`);
      res.status(202).json({
         users: data[0],
      });
   } catch (err) {
      res.status(500).json({
         message: err,
      });
   }
});

router.get("/job/delete", async (req, res) => {
   // write your code here
});

router.get("/job/update", async (req, res) => {
   // write your code here
});

router.get("/job/insert", async (req, res) => {
   // write your code here
});

router.get("/user", async (req, res) => {
   // write your code here
});

module.exports = router;
