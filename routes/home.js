const {Router} = require('express');
const router = Router();
const os = require('os');

router.get('/', (req, res) => {
    res.render('index',{
        title: 'ПРОВЕРКА ПОЛЬЗОВАТЕЛЯ',
    });
});


router.post('/', (req, res) => {
    let formData = req.body.visitor;
   os.userInfo().username === formData ? res.redirect('/trueAns') : res.redirect('/falseAns');
    res.redirect('/trueAns');
})


module.exports = router;