import React, { useEffect, useState } from 'react'
import Typewriter from "typewriter-effect"
import myResume from "../myResume.docx"
import { Link } from "react-scroll"
import {FiDownload} from  'react-icons/fi'

function Header() {
    const [profilePic, setProfilePic] = useState("./images/5.webp");
  
    return (
        <div className=" flex flex-wrap-reverse items-center lg:flex justify-around space-x-8 mx-auto">
            <div className=" flex flex-col items-center lg:items-start lg:mt-32 py-10 ">
                <div className="flex text-white space-x-2 mb-2">
                    <a href="https://github.com/mahafuztechie" rel="noreferrer" target="_blank"><i className="text-xl text-use-blue hover:text-amber-400 bg-white w-7 h-7 shadow-xl transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/mahafuz-ahmed-39876812a" rel="noreferrer" target="_blank"><i className="text-xl text-use-blue hover:text-amber-400 bg-white w-7 h-7 shadow-xl transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-linkedin"></i></a>
                    {/* <a href="https://www.instagram.com/mahfuz.techie" rel="noreferrer" target="_blank"><i className="text-xl text-use-blue hover:text-amber-400 bg-white w-7 h-7 shadow-xl transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/mahafuzaadeez5" rel="noreferrer" target="_blank"><i className="text-xl text-use-blue hover:text-amber-400 bg-white w-7 h-7 shadow-xl transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-facebook"></i></a> */}

                </div>
                <div className="flex flex-col items-center lg:items-start space-y-2 lg:space-y-5 ">
                    <h1 className=" text-base md:text-2xl lg:mt-4 font-light text-gray-300"><span className="lg:text-2xl">👋</span>Hello, I'm <span className=" text-use-yellow md:text-3xl font-extrabold font-poppins">Mahafuz Ahmed</span></h1>
                    <h2 className="text-2xl  lg:text-6xl text-gray-300
                      font-extrabold font-marvel"><Typewriter options={{
                         autoStart:true,
                         loop:true,
                         delay:40,
                         strings:[
                             "I'M a DotNet Dev 💻 ",
                             "I'M a React dev 😎",
                             "I'M a Tech Enthusiast ❤",
                         ]
                      
                    }}/>
                    </h2>
                    <p className="text-sm text-center lg:text-lg text-use-yellow font-extralight mx-1 lg:mx-0">knack of building user interactive applications with frontend and backend operations</p>
                </div>
                <div className="flex flex-col-wrap mb-5 sm:flex space-x-6 mt-6">
                    <Link to="contact" className="p-2  hover:no-underline text-sm lg:text-base text-white capitalize text-center bg-transparent border-2 border-white
                     hover:border-use-yellow hover:shadow-2xl transform transition duration-200 ease-in-out hover:scale-110 cursor-pointer
                     h-10 w-28 md:h-12 md:w-40 rounded-full  focus:outline-none">hire me</Link>
                    <a href={myResume} download="myResume" className="p-2 hover:no-underline text-sm lg:text-base text-use-blue capitalize text-center bg-opacity-70 bg-use-yellow
                     hover:shadow-2xl hover:text-use-blue transform transition duration-200 ease-in-out hover:scale-110
                     h-10 w-28 md:h-12 md:w-40 rounded-full focus:outline-none">get resume</a>
                </div>
            </div>

            <div className="flex items-center justify-center md:flex-1 pt-5">
                <img className="h-52 w-52 lg:h-80 lg:w-80 mr-4 lg:mr-6 lg:mt-6 rounded-full hover:shadow-2xl
                 bg-transparent transform duration-1000 hover:scale-105 object-cover"
                 src={profilePic} alt="" />
            </div>
        </div>
    )
}

export default Header;