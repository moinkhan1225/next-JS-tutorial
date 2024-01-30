import mongoose from "mongoose";

const connection ={};

export const connectDB = async () =>{
    try{
        if(connection.isConnected){
            console.log("using Existing Connection")
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isConnected = db.connection[0].readyState;
    }
    catch(error){
        console.log(error);
        throw new Error(error)
    }
}