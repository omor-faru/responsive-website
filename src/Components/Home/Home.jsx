import React from 'react'
import avatarImg from "../../assets/7358602-removebg-preview.png"
import TextChanger from '../TextChanger'

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
     <div className="md:w-2/4 md:pt-10 ">
     <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter ">
      <TextChanger/>
      </h1>
     <p className="text-sm md:text-2xl tracking-tight ">I’m a Front End Web developer passionate about making error-free websites with 100% client satisfaction. I am passionate about learning and sharing my knowledge with others as publicly as possible. JavaScript as well!</p>
     <button className="mt-5 md:md -inset-10 text-white py-2 px-3 text-sm md:text-lg md- py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">Contact me</button>
     </div> 
     <div> <img className="h-full w-full" src={avatarImg} alt=""/></div>
    </div>
  )
}

export default Home
