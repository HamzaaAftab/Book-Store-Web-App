import React from 'react'
import Login from './Login'
import Navbar from './Navbar'
import { useForm } from "react-hook-form";

function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      
  
    return (
    <>
    <Navbar></Navbar>

    <div className={`mt-16 container mx-auto`}> 
    <div class="p-10 mt-4 min-h-screen">

    <div className="flex justify-between mb-3 h-14">
    <h1 class="mb-8 font-extrabold text-4xl">Sign Up</h1>
    {/* Button */}
    <a href="/" class="rounded-md px-4 py-2.5 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Go Back</span>
    </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

        <form>
            <div>
                <label class="block font-semibold" for="name">Name</label>
                <input class="shadow-inner bg-gray-100 rounded-lg placeholder-black text-xl p-3 border-none block mt-1 w-full" id="name" type="text" name="name" required="required" autofocus="autofocus"/>
            </div>

            <div class="mt-4">
                <label class="block font-semibold" for="email">Email</label>
                <input class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-xl p-3 border-none block mt-1 w-full" id="email" type="email" name="email" required="required"/>
            </div>

            <div class="mt-4">
                <label class="block font-semibold" for="password">Password</label>
                <input class="w-full shadow-inner bg-gray-100 rounded-lg placeholder-black text-xl p-3 border-none block mt-1 w-full" id="password" type="password" name="password" required="required" autocomplete="new-password"/>
            </div>

            <div class="flex items-center justify-between mt-8">
                <button type="submit" class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-3 md:text-lg md:px-10">Signup</button>
                <a href="#" class="font-semibold text-lg ml-28 underline text-indigo-600" onClick={()=>{
                    document.getElementById("my_modal_3").showModal()
                }}>
                    Already registered? Login 
                </a>
                <Login/>
            </div>
        </form>

        <aside class="">
            <div class="bg-gray-100 p-8 rounded">
                <h2 class="font-bold text-2xl">Instructions</h2>
                <ul class="list-disc mt-4 list-inside">
                    <li>All users must provide a valid email address and password to create an account.</li>
                    <li>Users must not use offensive, vulgar, or otherwise inappropriate language in their username or profile information</li>
                    <li>Users must not create multiple accounts for the same person.</li>
                </ul>
            </div>
        </aside>

    </div>
    </div>
    </div>
    
    </>
  )
}

export default Signup
