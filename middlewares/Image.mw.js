const {Image} = require('../models');
const {Superhero} = require('../models');



module.exports.getImageInstance = async(req,res,next)=>{
    try{
      const superheroimage = req.body;
      console.log("superheroimage:",superheroimage);
      const imagestable = await Image.findOne({ where: { image: superheroimage.images } });  
    
      console.log("imagestable:",imagestable);
    
      if(imagestable === null){
        let data={
         nickname:superheroimage.nickname,
          image:superheroimage.images,
         }
        Image.create(data);
      }
             next();
      }
    catch(error){
      next(error);
    }
    }




