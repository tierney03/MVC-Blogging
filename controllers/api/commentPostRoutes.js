const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/comment/:id", async (req, res) => {
  try {
    const postComment = await Comment.findByPk(req.params.id);
    const comment = postComment.get({ plain: true });

    res.render("commentPost", {
      ...comment,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
