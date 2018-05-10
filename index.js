require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const hb = require('express-handlebars');
const PORT = process.env.PORT || 5000


var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var database = require('./config/database.js');



app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
  'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
app.use(cookieParser());
// required for passport
app.use(session({
    secret: 'starwarsspoiler',
    resave: true,
    saveUninitialized: true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================

//route crashes server//
// require('./app/controllers/todoController.js')(app);


require('./app/controllers/authController.js')(app, passport);



app.engine('.hbs', hb({ defaultLayout: 'main', extname: '.hbs' }))
  app.set('view engine', '.hbs')
  app.get('/',  (req, res) => {
    res.render('home')
  })
  app.listen(PORT, () => console.log(`Listening on ${PORT}`))