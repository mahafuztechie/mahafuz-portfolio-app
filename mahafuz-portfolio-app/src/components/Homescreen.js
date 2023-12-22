import React from 'react'
import Header from './Header' 
import Nav from './Nav'

function Homescreen() {
    return (
        <div id="home" className="overflow-hidden relative flex flex-col lg:h-screen w-screen bg-use-blue bg-cover  mx-auto">
           <Nav/>
           <Header/>   
           {/* <svg id="Layer_1"  className="overflow-hidden absolute bottom-0 bg-no-repeat" fill="#FFFFFF" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 57.01"><defs></defs><title>wavy-loops-bottom</title><path class="cls-1" d="M500,200H0V173a281.22,281.22,0,0,1,89-14c34.3.27,52.92,7,75,11,85.69,15.67,118.55-27.92,205-27,30.2.32,75.43,6.17,131,35" transform="translate(0 -142.99)"/></svg> */}
           {/* <svg id="Layer_1" className="overflow-hidden absolute bottom-0 bg-no-repeat" fill="#FFFFFF" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 73.88"><defs></defs><title>wavy-motion-bottom</title><path class="cls-1" d="M500,60.89c-48.69-32.2-89.37-39.68-118.38-40.15C284,19.15,238.78,64.64,166.68,70.55c-51.62,4.22-38.34-50.12-86-53.13C45.48,15.19,20,47.66,0,72.66V91.19H500Z" transform="translate(0 -17.31)"/></svg>  */}
           {/* <svg id="Layer_1" className=" overflow-hidden absolute bottom-0" fill="#FFFFFF" fill-opacity="1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200"><defs></defs><title>slant-down-bottom</title><path class="cls-1" d="M0,0,33,156s1.42,7.68,8,9c15,3,459,21,459,21v14H0Z"/></svg> */}
           {/* <svg id="Layer_1" className="overflow-hidden absolute bottom-0 h-18 w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 78.26"><defs></defs><title>paint-drip-bottom</title><path className="cls-1 overflow-hidden bg-fit bg-no-repeat" fill="#FFFFFF" fill-opacity="1" d="M0,181.36c35.21,0,8.49-59.62,32.49-59.62S34.91,174,54.08,174s2.41-44.68,22.79-44.68,1.29,63.8,23.63,64c16.67.15,5.8-58.86,26.33-58.86,23.25,0,.6,36.83,21.43,36.83s9.82-48.91,27.32-48.91-9.2,56.75,17.51,56.75-2.86-51.47,23.1-51.47.9,33.25,23.39,33.25c17.59,0,11.25-16.34,24.23-16.34,22.27,0-.07,45.43,23.62,45.43S283.84,130,309.8,130s1.95,49.66,22,49.66,4.92-41.21,22.62-41.21c22,0-1.28,48.76,21.85,48.76,23.8,0-.88-54.29,27.13-54.29,23.54,0,3.95,53.44,27.38,53.67,28,.29.77-58.35,27.64-58.35s7.66,62.66,29.64,62.66c11.19,0,11.91-14.11,11.91-14.11V200H0Z" transform="translate(0 -121.74)"/></svg> */}
           <svg className=" overflow-hidden absolute bottom-0" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill overflow-hidden bg-no-repeat" fill="#F3F4F6" fill-opacity="1"></path></svg>
        </div>
     


      
         
    )
}

export default Homescreen
