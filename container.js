const express = require('express');

var app = express();
app.get('/',function(req,res){
	res.send("hello i'm container!\n");
});
app.listen(3000,function(){
	console.log("successfully listen at 3000 port!\n");
});
