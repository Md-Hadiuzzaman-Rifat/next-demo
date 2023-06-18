import Post from "@/modal/Post"
import connect from "@/utils/db"
import { BaseNextResponse } from "next/dist/server/base-http"
import { NextResponse } from "next/server"

export const GET=async(request)=>{
    const url=new URL(request.url)

    const username=url.searchParams.get("username")
        console.log(username);
        try{
        await connect()
        const posts=await Post.find(username && {username})
        console.log(posts);
        return new NextResponse(JSON.stringify(posts),{status:200})
    }catch(err){
        return new NextResponse("Database Error",{status:500})
    }
}

export const POST=async(request)=>{
    const body=await request.json()
    const newPost =new Post(body)
    console.log(newPost);
    try{
        await connect()
        await newPost.save()
        return new NextResponse("Post has been created", {status:201})
        
    }catch(err){
        return new BaseNextResponse("Database Error",{status: 500})
    }
}