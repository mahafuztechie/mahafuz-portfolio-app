import React from 'react'


function Project({image, github, live, name, title, desc, newproj}) {

    return (
        <div className="relative group flex flex-col justify-between space-y-6 bg-use-yellow hover:bg-use-blue hover:bg-opacity-10 bg-opacity-30 rounded-2xl overflow-hidden border hover:shadow-xl  transition duration-200 ease-in-out transform hover:scale-105 ">
            <img src={image} alt={`${name}-pic`}
            className=" h-24 w-full" />
            <div className="flex-col items-center justify-center pb-2 px-2 space-y-3">
                <h2 className='text-center text-use-blue font-light text-lg'>{name}</h2>
                <h3 className='text-center font-semibold text-md'>{title}</h3>
                <div className="text-center text-sm">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="flex justify-between p-2 h-10">
                    <a href={github} rel="noreferrer" target="_blank"><i className="text-xl text-use-blue group-hover:text-amber-600  w-7 h-7 transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-github"></i></a>
                    {live && <a href={live} rel="noreferrer" target="_blank" className="group-hover:no-underline uppercase text-center text-use-blue rounded-lg px-1 tracking-wider  group-hover:bg-red-600 group-hover:text-white">live</a>}
            </div>
            {newproj==="trend" ? <span className="absolute -top-5 right-1 text-sm text-gray-200 px-2 rounded-xl bg-black bg-opacity-90">{newproj}</span>
            : <span className="absolute -top-5 right-1 text-sm text-gray-700 px-2 rounded-xl bg-use-yellow bg-opacity-90">{newproj}</span>}
        </div>
    )
}

export default Project;