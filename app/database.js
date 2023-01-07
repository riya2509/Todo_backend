import mysql from "mysql";

const sql = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todo",
});

sql.query(`select 1+4`, (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Database Connection successfull.`);
  }
});

export default sql;
