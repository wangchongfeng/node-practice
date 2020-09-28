const mysql = require("mysql");
const config = {
  host: "localhost",
  user: "root",
  password: "930911",
  database: "test",
};

let connect = mysql.createConnection(config);
connect.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("连接成功！");
  }
});

// 创建表
const CREATE_SQL = `CREATE TABLE IF NOT EXISTS test (
  id INT NOT NULL AUTO_INCREMENT,
  message VARCHAR(45) NULL,
  PRIMARY KEY (id))`;
const INSERT_SQL = `INSERT INTO test(message) VALUES(?)`;
const SELECT_SQL = `SELECT * FROM test`;
connect.query(CREATE_SQL, (err) => {
  if (err) {
    throw err;
  }
  // 插入数据
  connect.query(INSERT_SQL, "hello,world", (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    connect.query(SELECT_SQL, (err, results) => {
      console.log(results);
      connect.end(); // 若query语句有嵌套，则end需在此执行
    });
  });
});
