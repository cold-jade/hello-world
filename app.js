let express = require('express')
let path = require('path')
let favicon = require('serve-favicon')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let log4js = require('log4js')
let logger = log4js.getLogger('app')
let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(log4js.connectLogger(logger, { level: 'auto' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))
app.use('/contact', require('./routes/contact'))
app.use('/family-detail', require('./routes/family-detail'))
app.use('/family', require('./routes/family'))
app.use('/intro', require('./routes/intro'))
app.use('/news', require('./routes/news'))
app.use('./post-detail', require('./routes/post-detail'))
app.use('./post-list', require('./routes/post-list'))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
