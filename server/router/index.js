const express = require('express');
const superHeroRouter  = require('./superHeroRouter');



const router = express.Router();



router.use(superHeroRouter);

module.exports = router