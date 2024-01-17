import './App.css';
import About from './components/About';
import Homescreen from './components/Homescreen';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import FadeLoader from "react-spinners/FadeLoader";

function App() {
  const [loading, setLoading] =  useState(false);
 
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  return (
  

    <div className="App overflow-hidden bg-gray-100">
      
    {loading ? <div className=" flex justify-center items-center w-screen h-screen bg-use-blue ">
      <FadeLoader color={"#d0ff00"} loading={loading} size={15} margin={2} /><br/>
      <h1 className="text-sm text-gray-200">Loading...</h1></div>
      : <div>
      <Homescreen/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
}
   </div>
  
  
  );
}

export default App;
