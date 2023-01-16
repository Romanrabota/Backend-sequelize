const {Powers} = require('../models');
const {Superhero} = require('../models');

module.exports.getPowerInstance = async(req,res,next)=>{
try{
  
  const {body} = req;
  console.log(body);
  nickname =body.nickname;
  powerofhero=body.power; 
  const [powers, created] = await Powers.findOrCreate({
    where: { nickname:nickname},
    defaults: {
      powers: powerofhero
    }
  });  
  console.log(powers);
 //req.powersInstance = powers;
 //req.power = powers;

} catch(error){
    next(error);
}
}










/*

module.exports.findAll = async (req,res,next) =>
{
try{
    const {body} = req;
    const results = await Superhero.findAll();
    return res.status(200).send(results);
}   catch (error) {
    next(error)
}
}


module.exports.createSuperhero = async (req,res,next) =>
{
try{
    const {body} = req;
    const createSuperhero = await Superhero.create(body);
    return res.status(201).send(createSuperhero);
}   catch (error) {
    next(error)
}
}

*/