const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [User]
        });
        const posts = postData.map(post => post.get({ plain: true }));
        res.render("homepage", {
            posts,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});

router.get('/post/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['username', 'id'],
                },
                {
                    model: Comment,
                    include: [User]
                }
            ],
        });

        const post = postData.get({ plain: true });

        res.render('post', {
            ...post,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: { user_id: req.session.user_id }
        });
        const posts = postData.map(post => post.get({ plain: true }));

        res.render("dashboard", { posts, logged_in: req.session.logged_in });
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/new', withAuth, (req, res) => {
    res.render("newDashboard", { logged_in: req.session.logged_in })
});

router.get("/edit/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.findOne({
            where: { id: req.params.id }
        });
        const post = postData.get({ plain: true });
        res.render("edit", { post, logged_in: req.session.logged_in });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;