import React from 'react'
import { Link } from 'react-scroll'
import { ToastContainer } from 'react-toastify'
import {FiArrowUpCircle} from "react-icons/fi"


function Footer() {
    return (
        <footer className=" relative px-5 py-4 text-center font-semibold text-gray-600">
            <h1>2024 &copy; Mahafuz Ahmed</h1>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "><Link to="home" smooth={true} duration={1000}><FiArrowUpCircle className="bg-gray-100 text-use-blue rounded-full h-10 w-10"/></Link></div>
            <ToastContainer position="top-left"/>
        </footer>
    )
}

export default Footer
