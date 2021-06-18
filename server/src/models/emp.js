module.exports = {
  create: (connection, body, callback) => {
    console.log("Model:", body);
    connection.query(
      "INSERT INTO emp (eno,ename,title) VALUES (?,?,?)",
      [ "E" + Math.floor(0 + Math.random() * 9999), body.ename, body.title],
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
    connection.query("SELECT * FROM emp", (err, results) => {
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

  getId: (connection, ename, callback) => {
    connection.query(
      "SELECT eno FROM emp WHERE ename = '" + ename +"'" ,
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

  delete: (connection, body, callback) => {
    console.log(body.ename)
    connection.query(
      "DELETE FROM emp WHERE ename = ?" ,[body.ename],
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
      "UPDATE emp SET ename = ?, title= ? WHERE eno = ?",
      [ body.ename, body.title, body.eno],
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
  viewEmp1: (connection, callback) => {
    connection.query("SELECT * FROM emp1", (err, results) => {
      if (err) {
        console.log(err)
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
  viewEmp2: (connection, callback) => {
    connection.query("SELECT * FROM emp2", (err, results) => {
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
  viewEmp3: (connection, callback) => {
    connection.query("SELECT * FROM emp3", (err, results) => {
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
