var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/reg', function(req, res, next) {
  res.render('user/reg',{
    title: '注册',
    world: '欢迎注册'
  });
});
router.get('/login', function(req, res, next) {
  res.render('user/login',{
    title: '登陆'
  })
});
router.post('/reg', function(req, res, next) {
  //res.send(req.body);
  res.redirect('/');
});
router.post('/login', function(req, res, next) {
  //res.send(req.body);
  res.redirect('/');
});

module.exports = router;
