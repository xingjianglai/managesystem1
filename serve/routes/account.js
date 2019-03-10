var express = require('express');
var router = express.Router();
var connection = require('./conn');


/* GET users listing. */
router.get('/', function(req, res) {
  res.send('账号管理路由');
});

//拦截 统一设置响应头 解决跨域问题
router.all('*',(req,res,next)=>{
      //设置响应头 解决跨域问题
      res.header("Access-Control-Allow-Origin","*");
      //放行
      next();

})
//接收账号请求  /accountadd/
router.post('/accountadd',(req,res) => {
  //接收前端参数
  let {account,password,userGroup} = req.body;
  //把数据存入数据库
  //写sql语句
  const sqlStr = `insert into account(account,password,usergroup) values('${account}','${password}','${userGroup}')`;
  console.log(sqlStr);
  //执行sql语句
  connection.query(sqlStr,(err,data) => {
    if(err) throw err;
    //判断
    if(data.affectedRows > 0){
      res.send({code:0,reason:'添加账号成功'});
    }else{
      res.send({code:1,reason:'添加账号失败'});

    }
  })
})

//接收账号列表请求
router.get('/accountlist',(req,res) => {
    //查询所有数据
    //写sql语句
    const sqlStr = `select * from account order by ctime desc`;
    connection.query(sqlStr,(err,data) => {
      if(err) throw err;
      res.send(data)  //把查询到的所有数据返回给前端
    }) 
})

module.exports = router;
