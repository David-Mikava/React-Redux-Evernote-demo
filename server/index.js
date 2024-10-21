require('dotenv').config();
require('@babel/register');

const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const taskRouter = require('./routes/task');
const notebookRouter = require('./routes/notebook');

// const addRender = require('./src/middleware/addRender');

const app = express();
const PORT = 3000;

const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);

const sessionConfig = {
  name: 'UserAuth',
  store: new FileStore(), // добавить после установки session-file-store
  secret: process.env.COOKIE_SEKRET, // вместо 'keyboard cat' пишем COOKIE_SEKRET если настроен файл .env
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 10 * 60 * 60 * 24 * 1000,// устанавливаем сколько живет кука
    httpOnly: true,
  },
};

app.use(expressSession(sessionConfig));
// app.use(addRender);
app.use(cors({ credentials: true, origin: true }));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/task', taskRouter);
app.use('/notebook', notebookRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
