"use client"

import { useState } from "react"

export default function Header() {
  const [toggle, setToggle] = useState(false)

  return (
    <div className="bg-black/75 shadow-2xl backdrop-blur-2xl text-white  rounded-2xl  w-full px-10 ">
      
      {/* Desktop navbar */}
      <div className="md:flex hidden items-center justify-between h-18">
        <h1 className="text-xl font-bold">Logo</h1>
        <ul className="md:flex gap-10">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Blog</li>
          <li>Update</li>
        </ul>   
      </div>

      {/* Mobile navbar */}
      <div className="md:hidden flex items-center justify-between py-5">
        <h1 className="text-xl font-bold">Logo</h1>
        <button
          onClick={() => setToggle(!toggle)}
          className="text-xl font-bold transition-transform duration-300"
        >
          {toggle ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden flex flex-col gap-4 px-5 pb-5 transition-all duration-500 ease-in-out overflow-hidden 
        ${toggle ? "max-h-60 opacity-100 translate-y-0" : "max-h-0 opacity-0 translate-y-5"}`}
      >
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Update</li>
      </div>
    </div>
  )
}
