const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const port = 3000;
const mongoose = require('mongoose');
const {db} = require("./config/database")
const cors = require('cors');
const auth = require("./middleware/auth")

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const todosRouter = require('./routes/todos');
const moviesRouter = require('./routes/movies');
const reviewsRouter = require('./routes/reviews');

const app = express();

mongoose.connect(db).then(() => console.log('MongoDB connected')).catch(err => console.log(err))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/todos', auth.verifyUserToken, todosRouter);
app.use('/api/movies', auth.verifyUserToken, moviesRouter);
app.use('/api/reviews', auth.verifyUserToken, reviewsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(port, () => {
    console.log(`listening on ${port}`)
})

module.exports = app;
