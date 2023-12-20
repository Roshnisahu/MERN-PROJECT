const mongoose = require("mongoose");

module.exports =() =>{
    const connetionParams ={
        useNewUrlParser:true,
        useUnifiedTopology:true,
   };

   try{
    mongoose.connect(process.env.DB,connetionParams);
    console.log("Connected to database successfully");
   }
   catch(error){
    console.log(error);
    console.log("could not connect to database");
   }
}