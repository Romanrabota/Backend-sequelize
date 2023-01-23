const {Superhero,Image} = require('../models');

module.exports.createImage = async (req,res,next) =>
{
try{
    const {body,params:{id}} = req; 
    const superhero = await Superhero.findByPK(id);
    const result = await superhero.addImage(body);    
} catch (error) {
   next(error)
}
}

