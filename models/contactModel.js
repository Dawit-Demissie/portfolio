const db = require("../config/db");

exports.addMessage = (data, callback) => {
  const { name, email, subject, message } = data;
  const sql =
    "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)";
  db.query(sql, [name, email, subject, message], callback);
};
