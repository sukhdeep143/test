"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import Header from "../components/Header";

interface Post {
  id: number;
  title: string;
  thumbnail: string;
  price: string;
  quantity: string;
}

export default function Carts() {
  const [post, setPost] = useState<Post[]>([]);

  const blogPsot = async () => {
    try {
      const response = await fetch("https://dummyjson.com/carts/1");
      const GetData = await response.json();

      console.log(GetData);

      setPost(GetData.products || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    blogPsot();
  }, []);

  return (
    <div className="bg-slate-200  p-5">
      <Header />
      <h1>THis is Post page...</h1>
      <div>
        <ul className="grid lg:grid-cols-4 md:grid-cols-2  gap-5 p-5  ">
          {post.length === 0 ? (
            <p>Loading the posts...</p>
          ) : (
            post.map((p) => (
              <li key={p.id} className="p-10 shadow-2xl rounded-2xl bg-white hover:scale-105 transform duration-300 transition-transform h-full  "  >
                <div className="items-center  gap-5 flex flex-col">

                <h1>{p.title}</h1>
                <Image width={200} height={100} src={`${p.thumbnail}`} alt={`${p.title}`} className="rounded-3xl bg-amber-400" >

                </Image>
                <div className="mt-4 flex  w-full justify-between items-center">

                <p className= " bg-blue-500 rounded-2xl p-2 text-white">{p.price}</p>
                <p>{p.quantity}</p>
                </div>
                </div>

              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
