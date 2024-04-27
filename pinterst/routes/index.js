var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createuser', async function(req,res,next){
  let createduser = await userModel.create({
    username: "Mayur Patil",
    password: "787411",
    posts: [],
    email: "mayurtest@123.com",
    fullName: "mayur asha patil  "
  });
  res.send(createduser);
});

router.get('/createpost', async function(req,res,next){
  let createdpost = await postModel.create({
    postText: "welcome dosto to my page"
  });
  res.send(createdpost);
});

module.exports = router;
