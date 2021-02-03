const express = require('express');

var app = express();
app.get('/',function(req,res){
	res.send("hello i'm in pod2!\n");
});
app.get('/pod2',function(req,res){
	res.send("hello ingress I'm in pod2!\n");
});
app.listen(3000,function(){
	console.log("successfully listen at 3000 port!\n");
});
