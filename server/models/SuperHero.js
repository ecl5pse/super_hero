'use strict';
const mongoose = require('mongoose');
const { PROFILE_PICTURE_PATH } = require('../constants');

const Schema = mongoose.Schema;

const superHeroSchema = new Schema({
  nickName: {
    type: Schema.Types.String,
    required: true,
    unique: true,
    match: /^\w{6,16}$/,
  },
  realName: {
    type: Schema.Types.String,
    required: true,
  },

  originDescription: {
    type: Schema.Types.String,
    required: true,
  },
  superpowers: {
    type: Schema.Types.String,
    required: true,
  },
  catch_phrase: {
    type: Schema.Types.String,
    required: true,
  },

  profilePicture: {
    type: Schema.Types.String,
    get: value => `${PROFILE_PICTURE_PATH}/${value}`,
  },

});
superHeroSchema.set('toObject', { getters: true });
superHeroSchema.set('toJSON', { getters: true });
const SuperHero = mongoose.model('SuperHero', superHeroSchema);
module.exports = SuperHero;
