const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// route in case route doesn't exist
router.use((req, res) => res.send('invalid route'));

module.exports = router;

