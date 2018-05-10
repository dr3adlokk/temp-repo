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


app.use(express.static(__dirname+'/public'))


app.engine('.hbs', hb({ defaultLayout: 'main', extname: '.hbs' }))
  .set('view engine', '.hbs')
  .get('/',  (req, res) => {
    res.render('home')
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`))