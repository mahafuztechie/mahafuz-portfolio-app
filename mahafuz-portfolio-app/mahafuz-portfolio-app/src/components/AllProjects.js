import React from 'react'
import { useHistory, useNavigate } from 'react-router-dom'
import ProjectData from './ProjectData'
import {FaArrowLeft} from "react-icons/fa"


function AllProjects() {
    // const history = useHistory();
    const Navigate = useNavigate();
    return (
        <div className="p-5 bg-use-yellow bg-opacity-50">
            <ProjectData SliceNum="50"/>
            <div className="text-center">
                <button className="px-2 py-1 shadow-2xl transform  transition-all duration-200 cursor-pointer text-white text-center m-5 bg-use-blue rounded-lg" onClick={() => Navigate('/', { replace: true })}><FaArrowLeft className="text-sm text-center inline"/> Back</button>

            </div>
           
        </div>
    )
}

export default AllProjects
