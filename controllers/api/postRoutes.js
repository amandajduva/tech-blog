const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post("/", withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id
        })

        res.status(201).json(newPost)
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put("/:id", withAuth, async (req, res) => {
    try {
        const newPost = await Post.update({
            title: req.body.title,
            description: req.body.description,
        },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        console.log(req.params.id);
        if (!newPost) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(201).json(newPost)
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const projectData = await Post.destroy({
            where: {
                id: req.params.id
            },
        });

        if (!projectData) {
            res.status(404).json({ message: 'No post found with this id!' });
            return;
        }

        res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;