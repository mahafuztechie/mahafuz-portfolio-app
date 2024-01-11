import React from 'react'
import Bar from './Bar'
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiRedux, SiSpring, SiDotnet,SiMicrosoftsqlserver,SiCsharp} from  'react-icons/si'
import { FaJava } from "react-icons/fa"
// import {DiMysql} from  'react-icons/di'


function SkillsData() {
    const languages = [
        {
            name: ".Net-Core",
            level: "75",
            icon: <SiDotnet className="text-use-blue mt-1"/>
        },
        {
            name: "sql",
            level: "65",
            icon: <SiMicrosoftsqlserver className="text-use-blue mt-1 "/>
        },
        {
            name: "Csharp",
            level: "75",
            icon: <SiCsharp className="text-use-blue mt-1"/>
        },
        {
            name: "html",
            level: "80",
            icon: <SiHtml5 className="text-use-blue mt-1"/>
        },
        {
            name: "css",
            level: "80",
            icon: <SiCss3 className="text-use-blue mt-1"/>
        },
        {
            name: "Js",
            level: "65",
            icon: <SiJavascript className="text-use-blue mt-1"/>
        },
        {
            name: "React",
            level: "70",
            icon: <SiReact className="text-use-blue mt-1"/>
        },
        {
            name: "redux",
            level: "50",
            icon: <SiRedux className="text-use-blue mt-1"/>
             
        },
        // {
        //     name: "java",
        //     level: "65",
        //     icon: <FaJava className="text-use-blue mt-1"/>
        // },
        // {
        //     name: "sql",
        //     level: "40",
        //     icon: <DiMysql className="text-use-blue mt-1 "/>
        // },
        // {
        //     name: "Springboot",
        //     level: "30",
        //     icon: <SiSpring className="text-use-blue mt-1"/>
        // },
    ]
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4  pt-2 place-items-center lg:p-3">
            {languages.map((language, index) => 
                <Bar key={index} value={language} />
                )}
        </div>
    )
}

export default SkillsData
