const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => { 
    try {
        const postData = await Post.findAll({
            include: [User],
        });

        const post = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            post,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                User,
                {
                    model: Comment,
                    include: [User],
                },
            ],
        });

        if (postData) {
            const post = postData.get({ plain: true });

            res.render('singlePost', {
                ...post,
                logged_in: req.session.logged_in
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports = router;