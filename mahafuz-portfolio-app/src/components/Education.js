import React from 'react'

function Education({college, year, batch}) {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between space-x-10 lg:space-x-14 leading-1">
                <li>{college}</li>
                <h2 className="text-black bg-use-yellow bg-opacity-70 rounded-full w-28 lg:w-28 text-center py-2 ">{year}</h2>
            </div>
            <p className=" font-extralight text-sm text-use-yellow pl-2 lg:pl-8 lg:ml-5">{batch}</p>
        
        </div>
    )
}

export default Education
