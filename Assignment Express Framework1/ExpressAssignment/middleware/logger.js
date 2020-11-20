//Middleware being used:

//const moment=require('moment');

const logger=(req,res,next)=>{
    
    next();                                 //next() to be used everytime;
}       

module.exports=logger;

