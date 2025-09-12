"use client"
import { useEffect, useState } from "react"

interface Post{
    posts: string,
    title: string,
    para: string,
    id: number
}
export default function Home(){
    const [blog, setBlog] = useState<Post[]>([])

    const BlogData = async ()=>{
        try{
            const result = await fetch('https://dummyjson.com/posts');  
            const data = await result.json();
            setBlog(data.posts || [])

        }  catch (error) {
      console.log(error);
    }
    }
    useEffect(()=>{
        BlogData();
    },[])
    
    return(
        <div>
            <h1>Post data...</h1>
            {
                blog.length === 0 ? (<p>Loading data ...</p>): (
                    <ul>
                       {
                        blog.map((p)=>(
                            <li key={p.id}>
                                    {p.title}
                                    <h1>{p.para}</h1>
                                    
                            </li>
                        ))
                       }
                    </ul>
                )
            }
        </div>
    )
}