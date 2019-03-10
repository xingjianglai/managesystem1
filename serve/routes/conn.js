//连接mysql
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'smms'   //要连接数据库的名字
});

//执行连接
connection.connect(() =>{
  console.log('连接数据库成功');
});

//暴露出去
module.exports = connection;
