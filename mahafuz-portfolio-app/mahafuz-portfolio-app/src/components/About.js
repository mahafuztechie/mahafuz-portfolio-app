import React, { useEffect, useState } from 'react'

function About() {
    const [aboutImage, setAboutImage] = useState("/images/profilepic1.webp");
   
    return (
        <div id="about" className="overflow-hidden lg:h-screen w-screen flex flex-col items-center  mt-5 p-2">
            <h1 className=" text-use-blue lg:mt-5 font-bold text-lg lg:text-4xl">ABOUT ME</h1>
            <div className="md:flex justify-center items-center space-x-4 lg:space-x-6 lg:mt-10
              lg:px-10 lg:px-15 pb-5 rounded-lg lg:rounded-2xl ">
                <div className="hidden lg:flex items-center lg:mr-6 w-50">
                    <img className="rounded-2xl bg-use-blue p-1 shadow-xl" 
                    src={aboutImage} alt="" />

                </div>
                <div className="text-md bg-gray-100 lg:text-base shadow-xl flex flex-col lg:space-x-10  space-y-10 mt-3 mr-3 p-4 border lg:border-2 rounded-2xl">
                    {/* <p>I'M a Front end web developer based in Bangalore. I have gained knowledge & skills in React, Redux & Nextjs, along with a knack of building applications with utmost efficiency. Strong professional with a BCA willing to be an asset for an organization.</p> */}
                    <p>
                    Dedicated and skilled Software Developer with nearly 2 Years of work experience in developing and deploying API and client - server based applications using DotNet technologies and having understanding and handson experience in react 
                    </p>
                    <span className="font-semibold text-use-blue font-marvel text-2xl">Why me?</span>
                    <ul className="space-y-2 flex flex-col pl-2">
                        <li className="text-sm lg:text-base list-disc list-outside text-yellow-600 font-bold ">RestFul APIs</li>
                        <li className="text-sm lg:text-base list-disc list-outside text-yellow-600 font-bold ">Scalable Apps</li>
                        <li className="text-sm lg:text-base list-disc list-outside text-yellow-600 font-bold ">Responsive Web Development</li>
                        <li className="text-sm lg:text-base list-disc list-outside text-yellow-600 font-bold ">Interactive Front End as per the Design</li>
                        <li className="text-sm lg:text-base list-disc list-outside text-yellow-600 font-bold ">React & NextJS</li>
                        <li className="text-sm lg:text-base list-disc list-outside text-yellow-600 font-bold ">Redux for State Management</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}

export default About
