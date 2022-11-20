const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require('../../utils/auth');

router.get("/edit/:id", async (req, res) => {
    try {
        const editPost = await Post.findByPk(req.params.id);
        const edit = editPost.get({ plain: true });

        res.render("editPost", {
            ...edit,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", async (req,res) => {
    try {
        const editPost = await Post.destroy({
            where: {
                id: req.params.id,
            },
        });

        if(!editPost) {
            res.status(400).json({ message: "No post found"});
            return;
        }
        res.status(200).json(editPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;