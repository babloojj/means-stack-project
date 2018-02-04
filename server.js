"use strict";
var express = require('express');
var path = require('path');

var app = express();

app.use('/app', express.static( path.join( __dirname, '/app' )  )     )



app.listen(3000, function(err){
	if(err){
		console.log('Error at server listening on port 3000', err)
	}else{
		console.log('Server listening on port 3000')
	}
})




app.get('/*', function(req, res){
	res.sendFile( __dirname+'/app/index.html' );
})
