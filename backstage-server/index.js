/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 08:48:14
 * @LastEditTime: 2019-10-22 15:01:22
 * @LastEditors: Please set LastEditors
 */
const mex = require("express");
const mparser = require("body-parser");
const app = mex();
const path = require("path");
const crypto = require("crypto");// 加密模块
//链接数据库
const opt = require("./test-db");
const jwt = require('jsonwebtoken');

app.use(mparser.json());
app.use(mex.static(path.join(__dirname, "public")));

   //设置操作权限相关*************
const cookieParser = require('cookie-parser'); // npm install cookie-parser --save
app.use(cookieParser());  // 启用 cookie 解析 中间件
const whitelist = [
  //设置白名单
  "/bsystem/getlist",
  "/bsystem/getlist2",
  "/bsystem/registe",
  "/bsystem/login",
  "/bsystem/insertgoodslist",
  "/bsystem/insertgoodslist2",//加多条数据 以数组形式加
  "/bsystem/removegoodslist",//del
  "/bsystem/insert_nmts",//
  "/bsystem/getnmts",//
];
app.use(function(req, res, next) { //中间键
  if (whitelist.indexOf(req.url) !== -1) {
    // 如果在白名单里的 服务 可以随意访问 不需要tokne 验证
    next();
  } else {
    jwt.verify(req.cookies.token, "abcdef", async function (err, user) {
      console.log('0000000000000000');
      console.log(req.cookies.token);
      
      
      if (err) {
        res.send({
          success: false,
          msg: "您无权限操作"
        });
        return;
      }

      next();
    });
  }
});
 //设置操作权限相关*************
//查数据
app.get("/bsystem/getlist", async function(req, res) {
  let mlist = await opt.getgoodslist({}, 0, 6); //第一页(0),只显示6条
  console.log(mlist);
  res.send(mlist);
});

app.get("/bsystem/getnmts", async function(req, res) {
  let mlist = await opt.getnmts({}); 
  console.log(mlist);
  res.send(mlist);
});
app.get("/bsystem/getjswt", async function(req, res) {
  let mlist = await opt.getjswt({}); 
  console.log(mlist);
  res.send(mlist);
});
app.get("/bsystem/getxmsc", async function(req, res) {
  let mlist = await opt.getxmsc({}); 
  console.log(mlist);
  res.send(mlist);
});
app.get("/bsystem/getvip", async function(req, res) {
  let mlist = await opt.getvip({}); 
  console.log(mlist);
  res.send(mlist);
});
app.get("/bsystem/getxyzb", async function(req, res) {
  let mlist = await opt.getxyzb({}); 
  console.log(mlist);
  res.send(mlist);
});
app.get("/bsystem/getwdzl", async function(req, res) {
  let mlist = await opt.getwdzl({}); 
  console.log(mlist);
  res.send(mlist);
});
app.get("/bsystem/getjfmx", async function(req, res) {
  let mlist = await opt.getjfmx({}); 
  console.log(mlist);
  res.send(mlist);
});
app.get("/bsystem/getcjks", async function(req, res) {
  let mlist = await opt.getcjks({}); 
  console.log(mlist);
  res.send(mlist);
});
app.get("/bsystem/getxypj", async function(req, res) {
  let mlist = await opt.getxypj({}); 
  console.log(mlist);
  res.send(mlist);
});
app.get("/bsystem/getjxcp", async function(req, res) {
  let mlist = await opt.getjxcp({}); 
  console.log(mlist);
  res.send(mlist);
});
app.get("/bsystem/getxyqj", async function(req, res) {
  let mlist = await opt.getxyqj({}); 
  console.log(mlist);
  res.send(mlist);
});
app.get("/bsystem/getxywj", async function(req, res) {
  let mlist = await opt.getxywj({}); 
  console.log(mlist);
  res.send(mlist);
});

//增数据多条
app.post("/bsystem/insertgoodslist2", async function (req, res) {
  let s = await opt.insertgoodslist2(req.body);
  res.send(s);
});

//增数据单条
app.post("/bsystem/insertgoodslist", async function (req, res) {
  await opt.insertgoodslist(req.body);
  res.send({ ...req.body,msg:true });
});
app.post("/bsystem/insert_nmts", async function (req, res) {
   await opt.insert_nmts(req.body);
  res.send({ ...req.body,msg:true});
});
app.post("/bsystem/insert_jswt", async function (req, res) {
   await opt.insert_jswt(req.body);
  res.send({ ...req.body,msg:true});
});
app.post("/bsystem/insert_xmsc", async function (req, res) {
   await opt.insert_xmsc(req.body);
  res.send({ ...req.body,msg:true});
});
app.post("/bsystem/insert_vip", async function (req, res) {
   await opt.insert_vip(req.body);
  res.send({ ...req.body,msg:true});
});
app.post("/bsystem/insert_xyzb", async function (req, res) {
   await opt.insert_xyzb(req.body);
  res.send({ ...req.body,msg:true});
});
app.post("/bsystem/insert_wdzl", async function (req, res) {
   await opt.insert_wdzl(req.body);
  res.send({ ...req.body,msg:true});
});
app.post("/bsystem/insert_jfmx", async function (req, res) {
   await opt.insert_jfmx(req.body);
  res.send({ ...req.body,msg:true});
});
app.post("/bsystem/insert_cjks", async function (req, res) {
   await opt.insert_cjks(req.body);
  res.send({ ...req.body,msg:true});
});
app.post("/bsystem/insert_xypj", async function (req, res) {
   await opt.insert_xypj(req.body);
  res.send({ ...req.body,msg:true});
});
app.post("/bsystem/insert_jxcp", async function (req, res) {
   await opt.insert_jxcp(req.body);
  res.send({ ...req.body,msg:true});
});
app.post("/bsystem/insert_xyqj", async function (req, res) {
   await opt.insert_xyqj(req.body);
  res.send({ ...req.body,msg:true});
});
app.post("/bsystem/insert_xywj", async function (req, res) {
   await opt.insert_xywj(req.body);
  res.send({ ...req.body,msg:true});
});

//改 {name: '小小'}, {$set: {name: '小郭'}});
app.post("/bsystem/updategoodslist", async function (req, res) {
  let a = req.body.a;
  let b = req.body.b;
  let s = await opt.updategoodslist(a,b);
  res.send(s);
});

//删
//给条件(参数) {age:{$gt:11}}
app.post("/bsystem/removegoodslist", async function(req, res) {
  let s = await opt.removegoodslist(req.body);
  res.send(s);
});
//注册
app.post("/bsystem/registe", async function (req, res) {
  let md5 = crypto.createHash("md5");
  req.body.pw = md5.update(req.body.pw).digest("hex");
  let s = await opt.insertuser(req.body);
  res.send({...req.body, msg: true});
});
//登录
app.post("/bsystem/login", async function(req, res) {
  let md5 = crypto.createHash("md5");
  req.body.pw = md5.update(req.body.pw).digest("hex"); //转成md5
  let sel = { username: req.body.username, pw: req.body.pw }; //接到传过来的参数
  let userinfo = await opt.userlogin(sel, 0, 1); //给查找的条件 第一页(0),只显示两条
  if (userinfo.length === 1 && req.body.pw === userinfo[0].pw) {
    //转的md5与数据库对比
    //设置操作权限相关
    jwt.sign(userinfo[0], "abcdef", function(err, token) { //登录成功后就存cookie
      if (err) {
        res.send({
          login_ok: true,
          msg: err.message
        });
        return;
      }
      res.cookie("token", token);
      res.send({
        msg: "登录成功",
        login_ok: true
      });
    });
    return;

  } else {
    res.send({
      msg: "登录失败"
    });
  }
});

app.listen(7000, function(e) {
  if (e) {
    return;
  }
  console.log("服务已启动 7000.....");
});
