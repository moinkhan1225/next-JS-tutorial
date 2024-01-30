import { Post } from "@/app/lib/models"
import { connectDB } from "@/app/lib/utlis"
import { NextResponse } from "next/server"

export const GET = async (request,{params}) =>{
    const {slug} = params;
try
{
    connectDB()
    const post = await Post.findOne({slug})
    return NextResponse.json(post)

}
catch(err)
    {

    console.log(err)
    throw new Error("Failed to fetch post!")
    
    }
}

export const DELETE = async (request,{params}) =>{
    const {slug} = params;
try
{
    connectDB()
    await Post.delete({slug})
    return NextResponse.json("post deleted")

}
catch(err)
    {

    console.log(err)
    throw new Error("Failed to delete post!")
    
    }
}
