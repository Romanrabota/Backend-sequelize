const {Power} = require('../models');

module.exports.createPower = async (req,res,next) =>
{
try{
    const {body} = req;
    console.log(body);
    const createPower = await Power.create(body);
    return res.status(201).send(createPower);
} catch (error) {
   next(error)
}
}

