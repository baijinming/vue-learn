var express = require('express');
var router = express.Router();

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
  }
})

module.exports = router;
