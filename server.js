var express = require('express');
	app = express();
	port = process.env.PORT;
	zlFetch = require('zl-fetch');
	bodyParser = require('body-parser');


//Routes

// view engine setup
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.get('/',function(req,res) {
  res.sendFile(__dirname +'/public/map.html');
});
app.use('/moment', express.static(__dirname + '/node_modules/moment')); // redirect bootstrap JS
app.use('/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free')); // redirect bootstrap JS

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);


console.log('Holiday RESTful API server started on: ' + port);