const {Superhero} = require('../models');

module.exports.createSuperhero = async (req,res,next) =>
{
try{
    const {body} = req;
    console.log(body);
    const createSuperhero = await Superhero.create(body);
    return res.status(201).send(createSuperhero);
} catch (error) {
   next(error)
}
}


module.exports.findAll = async (req,res,next) =>
{
try{
    const results = await Superhero.findAll();
    return res.status(200).send(results);
}  catch (error) {
   next(error)
}
}


module.exports.findOnePK = async (req,res,next) =>
{
try{
    const {params:{id}} =req;
    const findSuperhero = await Superhero.findByPK(id);
    return res.status(200).send(findSuperhero);
} catch (error) {
   next(error)
}
}

module.exports.deleteByPK = async (req,res,next) =>
{
try{
    const {params: {id}} =req;
    const result = await Superhero.destroy({
      where: {
        id  
    }   
    });
    if(result){
    return res.status(200).send("Successfull delete");
  } else {
     res.status(204).send();


  }

} catch (error) {
   next(error);
}
}




module.exports.updateSuperhero = async (req,res,next) => {
   
   try{
    const {params: {id}, body} = req;
    const result = await Superhero.update(body, {
    where: {
      id
    }
   });

return  res.status(200).send();
 } catch(error){
   next(error); 
 }
}


