import React from 'react'

function OtherSkills({image}) {
    return (
        <div className="text-use-blue text-lg lg:mx-8 mx-2">
            <img className="w-8 lg:w-12 border-2 border-use-yellow p-1 rounded-full " src={image} alt="" />
            {/* <h3 className="hidden lg:flex items-center justify-center">{name}</h3> */}
        </div>
    )
}

export default OtherSkills