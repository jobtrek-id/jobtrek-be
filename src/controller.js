const db = require("../config/db");

const endpoint = (req, res, next) => {
   res.send("The API is Running");
};

const jobSelect = async (req, res, next) => {
   try {
      const { id } = req.body;
      if (!id) {
         return res.status(400).json({ message: "Missing ID parameter" });
      }

      const data = await db
         .promise()
         .query("SELECT * FROM job_application WHERE id_user = ?;", [id]);
      res.status(202).json(data[0]);
   } catch (err) {
      res.status(500).json({
         message: err,
      });
   }
};

const jobDelete = async (req, res, next) => {
   try {
      const { id } = req.body;
      if (!id) {
         return res.status(400).json({ message: "Missing ID parameter" });
      }

      await db.promise().query("DELETE FROM user WHERE id = ?", [id]);
      res.status(200).json({ message: "User deleted successfully" });
   } catch (err) {
      res.status(500).json({
         message: err,
      });
   }
};

const jobUpdate = async (req, res, next) => {
   try {
      const { id, name, email } = req.body;
      if (!id || !name || !email) {
         return res
            .status(400)
            .json({ message: "Missing required parameters" });
      }

      await db
         .promise()
         .query("UPDATE user SET name = ?, email = ? WHERE id = ?", [
            name,
            email,
            id,
         ]);
      res.status(200).json({ message: "User updated successfully" });
   } catch (err) {
      res.status(500).json({
         message: err,
      });
   }
};

const jobInsert = async (req, res, next) => {
   try {
      const { name, email } = req.body;
      if (!name || !email) {
         return res
            .status(400)
            .json({ message: "Missing required parameters" });
      }

      await db
         .promise()
         .query("INSERT INTO user (name, email) VALUES (?, ?)", [name, email]);
      res.status(201).json({ message: "User inserted successfully" });
   } catch (err) {
      res.status(500).json({
         message: err,
      });
   }
};

const user = async (req, res, next) => {
   try {
      const { id } = req.body;
      if (!id) {
         return res.status(400).json({ message: "Missing ID parameter" });
      }

      const data = await db
         .promise()
         .query("SELECT * FROM user WHERE id = ?;", [id]);
      res.status(202).json(data[0]);
   } catch (err) {
      console.log(err);
      res.status(500).json({
         message: err,
      });
   }
};

module.exports = { endpoint, jobSelect, jobDelete, jobUpdate, jobInsert, user };
