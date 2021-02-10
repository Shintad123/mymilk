const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('falseAns',{
        title: 'НЕВЕРНОЕ ИМЯ ПОЛЬЗОВАТЕЛЯ',
    });
});

module.exports = router;