const mysql = require("mysql");
const linuxConection = mysql.createConnection({
  host: "25.68.26.64",
  user: "lnxarchitect",
  password: "12345678",
  database: "lnxacmeconsult",
  port: 3306,
});
const winConection = mysql.createConnection({
  host: "25.77.62.233",
  user: "wndarchitect",
  password: "Contraseña123!",
  database: "wndacmeconsult",
  port: 3306,
  
});
const lnxConectionReplicate = mysql.createConnection({
  host: "25.77.62.233",
  user: "wndarchitect",
  password: "Contraseña123!",
  database: "lnxacmeconsult",
  port: 3306,
  
});
const winConectionReplicate = mysql.createConnection({
  host: "25.68.26.64",
  user: "lnxarchitect",
  password: "12345678",
  database: "wndacmeconsult",
  port: 3306,
  
});

module.exports = {
  linuxConection,
  winConection,
  lnxConectionReplicate,
  winConectionReplicate
};
