const {Power} = require('../models');
const {Superhero} = require('../models');


module.exports.getPowerInstance = async(req,res,next)=>{
try{
  const superheropower = req.body;
  console.log("superheropower:",superheropower);
  const powerstable = await Power.findOne({ where: { power: superheropower.superpowers } });  

  console.log("powerstable:",powerstable);

  if(powerstable === null){
    let data={
      nickname:superheropower.nickname,
      power:superheropower.superpowers
     }
    Power.create(data);
  }
         next();
  }
catch(error){
  next(error);
}
}























// 19.01 
/*module.exports.getPowerInstance = async(req,res,next)=>{
  try{

    const {body} = req;
    console.log("body:",body);
    superheropower=body.superpowers;
    console.log("superheropower:",superheropower);
    const powerstable = await Power.findAll();
    console.log(powerstable);    
  }
  catch(error){
    next(error);
  }
  }
  /*


module.exports.getPowerInstance = async(req,res,next)=>{
  try{
    const {body:{superpowers}} = req;
    console.log("superpowers", superpowers); 
    if(superpowers){
    for(let i=0; i<superpowers.length;i++){
      const powertable = await Power.findOne({ where: { power: superpowers[i] } } 
      );
      console.log("powertable", powertable); 
      if(!powertable){
        Power.create(powertable);
       req.PowerInstance=powertable;
      }
    } 
    }   
  }
   catch(error){
    next(error);
  }
  }
*/
 








/*
  const createPower = await Powers.create(body.);
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