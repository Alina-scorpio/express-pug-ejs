const express = require('express');
const path = require('path');

const app = express();

// Налаштування PUG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.engine('pug', require('pug').__express);

// Налаштування EJS
app.engine('ejs', require('ejs').renderFile);

// Статичні файли
app.use(express.static(path.join(__dirname, 'public')));

// Маршрути
const usersRouter = require('./routes/users');
const articlesRouter = require('./routes/articles');

app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

// Обробник для кореневого маршруту
app.get('/', (req, res) => {
  res.render('home');
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
