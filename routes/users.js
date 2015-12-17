var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('questionnaire',{title:'アンケート'});
});
router.get('/input',function(req,res,next){
	res.send("アンケートご協力ありがとうござました");
});
module.exports = router;
