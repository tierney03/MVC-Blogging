const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./goalsRoutes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);

modules.exports = router;