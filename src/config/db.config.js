const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');

async function connectToDB() {
    try {
        if (NODE_ENV === 'development') {
           await mongoose.connect(ATLAS_DB_URL); 
        }

         
        
    }
            catch (error) { 
                console.log("unable to connect to database");
                console.error("Error connecting to database:", error);  
            }
    
}
module.exports=connectToDB;