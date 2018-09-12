var express = require('express');
var router = express.Router();
var cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:8080',
    credentials:true
}

router.use(cors(corsOptions))

let userInfo=[
  {
    username:"zhangsan",
    password:"123"
  },
  {
    username:"lisi",
    password:"123"
  }
]

// router.all("*",(req,res,next)=>{
//     res.header("Access-Control-Allow-Origin", "http://localhost:8080");
//     res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
//     res.header("Access-Control-Allow-Headers", "Content-Type");
//     res.header("Access-Control-Allow-Credentials", true);
//     next()
// })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//登录接口
router.post('/login',(req,res)=>{
  let loginSuccess=false;
  let {username,password} = req.body;
  userInfo.forEach(item=>{
    if(item.username == username & item.password == password){
      loginSuccess=true
    }
  })
  if(loginSuccess){
    res.json({
      code:200,
      msg:"登录成功"
    })
  }else{
    res.json({
      code:400,
      msg:"登录失败"
    })
  }
})

router.get('/jsonp',(req,res) => {
  res.jsonp({
      code:200,
      msg:"jsonp数据"
  })
})

router.post('/cors',(req,res) => {
    res.json({
        code:200,
        msg:"cors数据"
    })
})

router.post('/cors2',function (req,res,next) {
    res.json({
        code:200,
        msg:"cors插件数据"
    })
})



module.exports = router;
