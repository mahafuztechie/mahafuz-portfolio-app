import React from 'react'

function Bar({value: {name, level, icon}}) {
    const bar_width = `${level}%`
    return (
        <div className="w-75 h-6 m-2 bg-use-blue rounded-full text-white ">
            <div style={{width: bar_width}} className="flex bg-gradient-to-r from-use-yellow to-gray-500 h-6 rounded-full ">
                <span className="ml-2 text-sm">{icon}</span>
                <span className="ml-2 text-sm font-light capitalize text-use-blue ">{name}</span>
                
            </div>
        </div>
    )
}

export default Bar
