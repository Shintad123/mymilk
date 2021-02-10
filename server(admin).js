const { urlencoded } = require('express');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const homeRoutes = require('./routes/home');
const trueAnsRoutes = require('./routes/trueAns');
const falseAnsRouters = require('./routes/falseAns');

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({extended: false}));
app.use('/',homeRoutes);
app.use('/trueAns',trueAnsRoutes);
app.use('/falseAns',falseAnsRouters);

const PORT = process.env.PORT || 1234;

app.listen(1234, () => {
    console.log(`Сервер открылся на 1234 порте`);
});