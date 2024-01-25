import mongoose from "mongoose";

export const Connection = async (username, password) => {

const URL = `mongodb://${username}:${password}@ac-wawlzfy-shard-00-00.6r8obha.mongodb.net:27017,ac-wawlzfy-shard-00-01.6r8obha.mongodb.net:27017,ac-wawlzfy-shard-00-02.6r8obha.mongodb.net:27017/?ssl=true&replicaSet=atlas-uhid4i-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
try {
   await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
   console.log('DB connected successfully');
   } catch (error) {
    console.log('Error while connecting with the DB',error.message);
   }
}

export default Connection;