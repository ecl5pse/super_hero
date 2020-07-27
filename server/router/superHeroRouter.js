const superHero = require( '../controllers/superHero.controller')
const express = require('express');
const { saveProfilePicture } = require('./../middleware/multer.js');



const superHeroRouter = express.Router();



superHeroRouter.route( '/superHero(/:id)?' ).post(
    saveProfilePicture,
    superHero.savePicture,
    superHero.createSuperHero,
).put(
    superHero.updateSuperHero,
).get(superHero.getSuperHero)
    .delete(superHero.deleteSuperHero)


module.exports = superHeroRouter