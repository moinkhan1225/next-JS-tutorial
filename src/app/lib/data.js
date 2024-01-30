import { Post, User } from "./models"
import { connectDB } from "./utlis";

// const users =
// [
//     {id:1,username:'John'},
//     {id:2,username:'Jeff'},
//     {id:3,username:'Jarvis'},
// ]


// const posts =
// [
//     {id:1,title:"Post 1",body:"......",userId:1},
//     {id:2,title:"Post 2",body:"......",userId:2},
//     {id:3,title:"Post 3",body:"......",userId:3},
//     {id:4,title:"Post 4",body:"......",userId:4},
// ]

export const getPosts = async () =>{
    try{
        connectDB();
        const posts = await Post.find();
        return posts;
    }
    catch(error){
       console.log(error)
       throw new Error("Failed to fetch Posts!") 
    }
};

export const getPost =  async (slug) =>{
    try{
        connectDB();
        const post = await Post.findOne({slug});
        return post;
    }
    catch(error){
       console.log(error)
       throw new Error("Failed to fetch Post!") 
    }
}

export const getUser = async (userId) =>{
    try{
        connectDB();
        const user = await User.findById(userId);
        return user;
    }
    catch(error){
       console.log(error)
       throw new Error("Failed to fetch User!") 
    }
}

export const getUsers = async () =>{
    try{
        connectDB();
        const users = await User.find();
        return users;
    }
    catch(error){
       console.log(error)
       throw new Error("Failed to fetch Users!") 
    }
}