const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post("/", withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment_description: req.body.comment_description,
            post_id: req.body.post_id,
            user_id: req.session.user_id,
        })

        res.status(201).json(newComment)
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;