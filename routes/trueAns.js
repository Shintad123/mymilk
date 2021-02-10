const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('trueAns',{
        title: 'ВЕРНОЕ ИМЯ ПОЛЬЗОВАТЕЛЯ',
    });
});


module.exports = router;    