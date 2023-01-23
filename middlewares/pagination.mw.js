module.exports  = async (req,res,next) =>
{
try{
    const {query:{limit, offset}} = req;
    req.pagination={
    limit:5,
    offset:0
    }
next();
} catch (error) {
   next(error)
}
}