module.exports = {
  create: (connection, body, callback) => {
    connection.query(
      "INSERT INTO pay (payno,title,salary) VALUES (?,?,?)",
      ["PV" + Math.floor(0 + Math.random() * 9999), body.title, body.salary],
      (err, results) => {
        if (err) {
          callback({
            array: null,
            id: null,
            success: false,
            err: JSON.stringify(err),
          });
          return;
        }
        callback({ array: null, id: null, success: true });
      }
    );
  },

  getAll: (connection, callback) => {
    connection.query("SELECT * FROM pay", (err, results) => {
      if (err) {
        callback({
          array: null,
          id: null,
          success: false,
          err: JSON.stringify(err),
        });
        return;
      }
      callback({ array: results, id: null, success: true });
    });
  },

  delete: (connection, body, callback) => {
    connection.query(
      "DELETE FROM pay WHERE title = " + body.title,
      (err, results) => {
        if (err) {
          callback({
            array: null,
            id: null,
            success: false,
            err: JSON.stringify(err),
          });
          return;
        }

        console.log(results);
        if (results.affectedRows == 0) {
          callback({ array: null, id: null, message: "No existe el id" });
          return;
        }

        callback({ array: null, id: null, success: true });
      }
    );
  },
  update: (connection, body, callback) => {
    connection.query(
      "UPDATE pay SET title= ?, salary= ? WHERE pno = ?",
      [body.title, body.salary, body.payno],
      (err, results) => {
        if (err) {
          callback({
            array: null,
            id: null,
            success: false,
            err: JSON.stringify(err),
          });
          return;
        }

        console.log(results);
        if (results.affectedRows == 0) {
          callback({ array: null, id: null, message: "No existe el id" });
          return;
        }

        callback({ array: null, id: null, success: true });
      }
    );
  },
  viewPay1: (connection, callback) => {
    connection.query(
      "SELECT * FROM pay1",
      (err, results) => {
        if (err) {
        callback({
          array: null,
          id: null,
          success: false,
          err: JSON.stringify(err),
        });
        return;
      }
      callback({ array: results, id: null, success: true });
      }
    );
  },
  viewPay2: (connection, callback) => {
    connection.query(
        "SELECT * FROM pay2",
        (err, results) => {
          if (err) {
          callback({
            array: null,
            id: null,
            success: false,
            err: JSON.stringify(err),
          });
          return;
        }
        callback({ array: results, id: null, success: true });
      }
    );
  },
  viewPay3: (connection, callback) => {
    connection.query(
        "SELECT * FROM pay3",
        (err, results) => {
          if (err) {
          callback({
            array: null,
            id: null,
            success: false,
            err: JSON.stringify(err),
          });
          return;
        }
        callback({ array: results, id: null, success: true });
      }
    );
  },
};
