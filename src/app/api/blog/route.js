import { Post } from "@/app/lib/models"
import { connectDB } from "@/app/lib/utlis"
import { NextResponse } from "next/server"

export const GET = async () =>{
try
{
    connectDB()
    const posts = await Post.find()
    return NextResponse.json(posts)

}
catch(err)
    {

    console.log(err)
    throw new Error("Failed to fetch posts!")
    
    }
}