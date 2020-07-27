const { SuperHero } = require('./../models');

module.exports.savePicture = (req, res, next) => {
  req.body.profilePicture = req.file.filename;
  next();
}
module.exports.createSuperHero = async (req, res, next) => {

  try {
    const {body}= req
    const superHero  =  new SuperHero(req.body)
    const newSuperHero = await superHero.save()
    if (newSuperHero) {
      return res.status(201).send(newSuperHero);
    }
    next(e);
  } catch (e) {
    next(e);
  }
};

module.exports.updateSuperHero = async (req, res,next) =>{
try {
  const { params: { id }, body } = req;

  const updatedSuperHero = await SuperHero.findOneAndUpdate( id, body, { new: true } );
  if( updatedSuperHero ) {
    return res.send( updatedSuperHero );
  }

}catch (e) {
  next(e)
}
}
module.exports.getSuperHero = async (req, res,next) => {
  try {
    const allSuperHero = await  SuperHero.find()
    res.send(allSuperHero)
  }catch (e) {
    next(e)
  }
}

module.exports.deleteSuperHero  = async (req,res,next)=>{
  try{
    const { params: {id}} = req;
    const deleteSuperHero = await SuperHero.findByIdAndRemove({_id:id} );
    if( deleteSuperHero ) {
      return res.send( deleteSuperHero );
    }
    next()
  }catch (e) {
    next(e)
  }
}