
// 异步写法需要mysql2
(async () => {
  const Sequelize = require("sequelize");
  const config = {
    host: "localhost",
    user: "root",
    password: "930911",
    database: "test",
  };
  let sequelize = new Sequelize("test", "root", "930911", {
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
  });

  const Fruit = sequelize.define("Fruit", {
    name: { type: Sequelize.STRING(20), allowNull: false },
    price: { type: Sequelize.FLOAT, allowNull: false },
    stock: { type: Sequelize.INTEGER, defaultValue: 0 },
  });
  Fruit.sync()
  Fruit.create({
    name: '苹果',
    price: 4.5
  })
  Fruit.create({
    name: '香蕉',
    price: 3.9
  })
  JSON.parse(JSON.stringify(Fruit.findAll()))
  // console.log(JSON.stringify(fruits));
})();
