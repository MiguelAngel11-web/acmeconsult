module.exports = {
  create: (connection, body, callback) => {
    connection.query(
      "INSERT INTO pro (pno,pname,budget) VALUES (?,?,?)",
      ["P" + Math.floor(0 + Math.random() * 9999), body.pname, body.budget],
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
  getId: (connection, pname, callback) => {
    connection.query(
      "SELECT pno FROM pro WHERE pname = '" + pname +"'" ,
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

        console.log("-->", results);
        if (results.length == 0) {
          callback({ array: null, id: null, message: "No existe el id" });
          return;
        }

        callback({ array: null, id: results[0] || null, success: true });
      }
    );
  },
  getAll: (connection, callback) => {
    connection.query("SELECT * FROM pro", (err, results) => {
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
    console.log(body.ename);
    connection.query(
      "DELETE FROM pro WHERE pname = ?",
      [body.pname],
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
      "UPDATE pro SET pname = ?, budget= ? WHERE pno = ?",
      [body.pname, body.budget, body.pno],
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
        if (results.affectedRows == 0) {
          callback({ array: null, id: null, message: "No existe el id" });
          return;
        }

        callback({ array: null, id: null, success: true });
      }
    );
  },
  viewProj1: (connection, callback) => {
    connection.query("SELECT * FROM prohorizontal1", (err, results) => {
      if (err) {
        console.log(err);
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
  viewProj2: (connection, callback) => {
    connection.query("SELECT * FROM prohorizontal2", (err, results) => {
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
  viewProj3: (connection, callback) => {
    connection.query("SELECT * FROM prohorizontal3", (err, results) => {
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
};
