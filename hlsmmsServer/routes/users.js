var express = require('express');
var router = express.Router();
//引入mysql模块
var mysql=require('mysql')
//配置数据库链接
var conn=mysql.createConnection({
  host     : 'localhost', //数据库主机名
  user     : 'root',         //数据库账号
  password : 'root',    //密码
  database : 'hlsmms'      //使用哪个数据库
})
//打开数据库
  conn.connect(err=>{
    if(err){
      console.log("数据库链接失败")
    }else{
      console.log("数据库链接成功")
    }
  })
  //解决跨域 全部路由配置然后next()允许下面的路由运行
  router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","http://localhost:8080");
    //允许携带cookie证书的域名
    res.header("Access-Control-Allow-Credentials",true);  //值是一个布尔值，表示是否允许发送Cookie

    next()
  })
  /* 创建路由响应前端ajax请求 */
  router.post('/useradd', function(req, res) {
  //接受添加用户中的数据
  let{username,pass,usergroup}=req.body;
  //添加用户的路有种构造SQL语句和参数数组
  let sqlStr="insert into userinfo(username,userpwd,usergroup)values(?,?,?)";
  let sqlParmas=[username,pass,usergroup];
  //解决跨域
 
  //执行sql语句吧数据加入到数据库中并且给前端返回数据
  conn.query(sqlStr,sqlParmas,(err,result)=>{
    if(err){
      throw err
    }else{
      //加入数据库后会返回一个对象然后调用对象中的affectedRows属性只要大于0说明入库成功
      if(result.affectedRows>0){
        res.json({"isOk":true,"code":1,"msg":"用户添加成功"})
      }else{
        res.json({"isOk":false,"code":-1,"msg":"用户添加失败！"})
      }
    }
  })
});
//配置路由响应前端请求
  router.get("/getdata",(req,res)=>{
  
  
    //构造sql查询语句
    let sqlStr="select * from userinfo order by userid desc";
    //执行SQL语句,把得到的数据响应给前端是一个数组对象刚好匹配前端数据
    conn.query(sqlStr,(err,userdata)=>{
      if(err){
        throw err;
      }else{
        res.send(userdata)
      }
    })
    
  });
  router.get("/deldata",(req,res)=>{
    //接受前端数据
    let userid=req.query.userid;
    //构造sql语句
    let sqlStr="delete from userinfo where userid="+userid;
    //执行sql语句
    conn.query(sqlStr,(err,result)=>{
      if(err){
        throw err
      }else{
        if(result.affectedRows>0){
          res.json({"isOk":true,"code":1,"msg":"用户删除成功!"})
        }else{
          res.json({"isOk":false,"code":-1,"msg":"用户删除失败!"});
        }
      }
    })
  })
  router.get("/getbyid",(req,res)=>{
    let userid=req.query.userid;
    //构建sql语句
    let sqlStr="select * from userinfo where userid="+userid;
    //执行sql语句
    conn.query(sqlStr,(err,result)=>{
      if(err){
        throw err
      }
      else{
        res.send(result)
      }
    })
  })
  router.post("/usersave",(req,res)=>{
    //结构前端发送的数据
    let {username,userpwd,usergroup,userid}=req.body;
    //构造sql语句
    //？占位符站位每个位置要与数组的变量对应通过id更新数据
    let sqlStr="update userinfo set username=?,userpwd=?,usergroup=? where userid=?"
    //把数据放进数组和sql语句合并对于数据多的时候很方便
    let sqlParmas=[username,userpwd,usergroup,userid]
    //执行sql语句
    conn.query(sqlStr,sqlParmas,(err,result)=>{
      if(err){
        throw err;
      }
      else{
          //4)后端——根据执行的结果（受影响的行数）返回json给前端
          if(result.affectedRows>0){
             res.cookie("userid",userid);
            res.cookie("username",username);
            res.json({"isOk":true,"code":1,"msg":"用户修改成功！"});
        }
        else{
            res.json({"isOk":false,"code":-1,"msg":"用户修改失败！"});
        }
      }
    })
  })
  router.post("/checkLogin",(req,res)=>{
    let{username,userpwd}=req.body;
    let sqlStr="select * from userinfo where username=? and userpwd=?"
    let sqlParmas=[username,userpwd]
    conn.query(sqlStr,sqlParmas,(err,result)=>{
      if(err){
        throw err;
    }
    else{
        //3）后端——返回json结果给前端
        //[] 空数组表示验证失败   [].length>0数组非空就表示验证成功
        if(result.length>0){
            // [{"userid":35,"username":"yinhonxia","userpwd":"123456","usergroup":"超级管理员","addDate":"2018-12-31T08:23:57.000Z","isLocked":0}]
            //登录成功：写入cookie
            res.cookie("userid",result[0].userid);
            res.cookie("username",username);

            res.send({"isOk":true,"msg":"用户登录成功！"});
        }
        else{
            //登录失败
            res.send({"isOk":false,"msg":"用户登录失败！"});
        }
    }
    })
  })
module.exports = router;
