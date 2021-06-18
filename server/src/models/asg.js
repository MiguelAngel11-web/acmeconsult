module.exports = {
  create: (connection, body, callback) => {
    connection.query(
      "INSERT INTO asg (eno,pno,resp,dur) VALUES (?,?,?,?)",
      [body.ename, body.pname, body.resp, body.dur],
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
    connection.query("SELECT * FROM asg", (err, results) => {
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
      "DELETE FROM asg WHERE eno = ? && pno = ?",
      [body.ename, body.pname],
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
      "UPDATE asg SET resp = ?, dur= ? WHERE eno = ? && pno = ?",
      [body.resp, body.dur, body.ename, body.pname],
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
  viewAsg1: (connection, callback) => {
    connection.query("SELECT * FROM asg1", (err, results) => {
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
  viewAsg2: (connection, callback) => {
    connection.query("SELECT * FROM asg2", (err, results) => {
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
  viewAsg3: (connection, callback) => {
    connection.query("SELECT * FROM asg3", (err, results) => {
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
