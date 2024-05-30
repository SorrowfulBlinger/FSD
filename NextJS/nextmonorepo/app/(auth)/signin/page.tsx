// Client side rendering
"use client"

import { useState } from "react";
import { redirect } from "next/navigation";

export default function Signin() {

  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div >
      <div className="pt-5 flex justify-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
      Sign-In page</div>
      <div className="mt-20 flex justify-center max-w-lg flex-col mx-auto p-5 border-8 border-stone-950 space-y-4">
        <input onChange={(e) => {
          setUname(e.target.value)
        }} className="p-3 text-center border-4 border-stone-250" placeholder="Username"></input>
        <input onChange={(e) => {
          setPassword(e.target.value)
        }} className="p-3 text-center border-4 border-stone-250" placeholder="password" type="password"></input>
        <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 p-3 text-center border-4 border-stone-250 fill-blue-500" onClick={()=>{
          alert('Hi There:' + uname + ':'+ password);
          redirect('/');
        }}>SignIn</button>
      </div>
    </div>
  );
}


