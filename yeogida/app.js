var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/login',require("./controllers/login"));
app.use('/',require('./controllers/main'));
app.use('/product',require('./controllers/product'));
app.use('/choice',require('./controllers/choice'));
app.use('/search',require('./controllers/search'));
app.use('/purchase',require('./controllers/purchase'));
app.use('/sell',require('./controllers/sell'));
app.use('/chat',require('./controllers/chatting'));


/*
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/

module.exports = app;
