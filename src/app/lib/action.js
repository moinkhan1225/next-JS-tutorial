"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectDB } from "./utlis";
import { signIn, signOut } from "./auth";
import * as bcrypt from "bcryptjs"

export const addPost = async(prevState,formData)=>{
    const {userId, title, desc, slug, date} = Object.fromEntries(formData);
    console.log(title, desc, userId, slug ,date)
    try{
        connectDB()
        const newPost = new Post({
            userId,
            title,
            desc,
            slug,
            date
        });
        await newPost.save();
        revalidatePath('/blog')
        revalidatePath('/admin')
        console.log("Saved your Post in DB!")

    }catch(err){
        console.log(err);
        return {error:"Something went wrong while adding your post!"}
    }
}

export const addUser = async(prevState,formData)=>{
    const {username,email,password,img} = Object.fromEntries(formData);
    //console.log(title, desc, userId, slug ,date)
    try{
        connectDB()
        const newUser = new User({
            username,email,password,img
        });
        await newUser.save();
        revalidatePath('/Admin')
        console.log("Saved user in DB!")

    }catch(err){
        console.log(err);
        return {error:"Something went wrong while adding your post!"}
    }
}

export const delPost = async(formData)=>{
    const {id} = Object.fromEntries(formData);
    try{
        connectDB()
        await Post.findByIdAndDelete(id);
        console.log("Post deleted Succesfully!")
        revalidatePath('/blog')
    }catch(err){
        console.log(err);
        return {error:"Something went wrong while deleting your post!"}
    }
}

export const delUser = async(formData)=>{
    const {id} = Object.fromEntries(formData);
    try{
        connectDB();
        await Post.deleteMany({userId:id});
        await User.findByIdAndDelete(id);
        console.log("User deleted Succesfully!")
        revalidatePath('/admin')
    }catch(err){
        console.log(err);
        return {error:"Something went wrong while deleting your post!"}
    }
}

export const handleGithubLogin = async() =>{
    await signIn('github');
  };

export const handleGoogleLogin = async() =>{
    await signIn('google');
  };

  
  export const handleGoogleLogOut = async() =>{
      await signOut();
    };
    
  export const handleGithubLogOut = async() =>{
      await signOut();
    };

export const register = async(previousState,formData)=>{
    const {username,email,password,img,passwordRepeat} =Object.fromEntries(formData);
    if(password !== passwordRepeat){
        return {error: "Password do not match!"};
    }
    try{
        connectDB();
        const user = await User.findOne({username});
            if(user){
                return {error:"Username already Exists!"};
            }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
        img,
    });
    await newUser.save();
    console.log("saved to DB");
    return {success:true};
    }catch(err){
        console.log(err);
        return {error: "Something went wrong!"};
    }

}  

export const login = async(prevState,formData)=>{
    const {username,password} =Object.fromEntries(formData);
   
    try{
        await signIn('credentials',{username,password})
    }catch(err){
        console.log(err);
        if(err.message.includes("CredentialsSignin")){

            return {error: "Invalid username or password!"};
        }
        throw err;
    }

}  