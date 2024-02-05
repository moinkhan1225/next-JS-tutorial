// import mongoose from "mongoose";

// const connection ={};

// export const connectDB = async () =>{
//     try{
//         if(connection.isConnected){
//             console.log("using Existing Connection")
//             return;
//         }
//         const db = await mongoose.connect(process.env.MONGO);
//         connection.isConnected = db.connection[0].readyState;
//     }
//     catch(error){
//         console.log(error);
//         throw new Error(error)
//     }
// }

import mongoose from "mongoose";

const connection = {};

export const connectDB = async () => {
    try {
        if (connection.isConnected) {
            console.log("Using Existing Connection");
            return;
        }

        const db = await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false,
        });

        connection.isConnected = db.connection.readyState;

        console.log("New Connection Established");

    } catch (error) {
        console.error(error);
        throw new Error(error);
    }
};
