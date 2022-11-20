const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentPostRoutes = require('.commentPostRoutes');
const editPostRoutes = require('./editPostRoutes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/edit', editPostRoutes);
router.use('/comment', commentPostRoutes);

module.exports = router;