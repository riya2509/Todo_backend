const appController = {};
import sql from "../database.js";
appController.getAllData = (req, res) => {
  sql.query(`SELECT * FROM tasks order by id asc;`, (error, result) => {
    if (error) {
      console.log(error);
      res.send({ error });
    } else {
      res.send({ message: `Task Fetched Successfully.`, data: result });
    }
  });
};

appController.updateData = (req, res) => {
  const status = req.body.status;
  const id = req.body.id;

  sql.query(
    `UPDATE tasks SET status = '${status}' WHERE (id = ${id});`,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err });
      } else {
        res.send({ message: `Data Updated Successfully` });
      }
    }
  );
};

appController.deleteData = (req, res) => {
  const deleteID = req.query.id;
  sql.query(`DELETE FROM tasks WHERE (id=${deleteID});`, (err, result) => {
    if (err) {
      console.log(err);
      res.send({ err });
    } else {
      res.send({ message: `Task deleted successfully` });
    }
  });
};

appController.createData = (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const status = req.body.status;
  sql.query(
    `INSERT INTO tasks (name, status) VALUES ('${name}', '${status}');`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.send({ error });
      } else {
        res.send({ message: `Task Created Successfully.` });
      }
    }
  );
};
export default appController;
