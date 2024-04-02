const db = require("../config/db");

// function enpoint
const endpoint = (req, res, next) => {
   res.send("The API is Running");
};

// function select
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

// function delete
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

// function update
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

// function insert
const jobInsert = async (req, res, next) => {
   try {
      const { companyName, position, notes, idStatus, idContract } = req.body;
      if (!companyName || !position || !notes || !idStatus || !idContract) {
         return res
            .status(400)
            .json({ message: "Missing required parameters" });
      }

      // Insert company into ref_company table
      const companyInsertResult = await db
         .promise()
         .query("INSERT INTO ref_company (company_name) VALUES (?)", [
            companyName,
         ]);

      const companyId = companyInsertResult[0].insertId;

      // Insert job application into job_application table
      await db
         .promise()
         .query(
            "INSERT INTO job_application (id_company, id_status, position, id_contract, notes) VALUES (?, ?, ?, ?, ?)",
            [companyId, idStatus, position, idContract, notes]
         );

      res.status(201).json({
         message: "Job application inserted successfully",
      });
   } catch (err) {
      res.status(500).json({
         message: err,
      });
   }
};

// function user
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
