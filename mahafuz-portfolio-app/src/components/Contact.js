import React from 'react'
import emailjs from "@emailjs/browser"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Typewriter from "typewriter-effect"

function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_i8p74fa', 'template_swxaqgz', e.target, 'user_eYfZYy2KkgiTap3w0d1uA')
          .then((result) => {
              console.log(result.text);
              toast.success("Thank you for contacting");
          }, (error) => {
              console.log(error.text);
              toast.error(error.text);
          });
          e.target.reset();
      }

    return (
        <div id="contact" className="relative overflow-hidden bg-use-blue h-screen w-screen flex-col lg:space-y-4 space-y-8 py-1">

            <div className="space-y-8 lg:space-y-1">
                <h1 className="text-center text-use-yellow font-bold text-lg lg:text-4xl uppercase ">Contact</h1>
                <div className="text-center mt-4 mb-3 flex-col items-center justify-center gap-2">
                  <a  href="tel:917975493956" className="tracking-wide inline-block hover:no-underline text-gray-400 text-sm">+917975493956</a><br />
                  <a  href="mailto:mahafuzaadeez5@gmail.com" className="tracking-wide hover:no-underline text-gray-400 text-sm inline-block">mahafuzaadeez5@gmail.com</a>
                </div>
                <h2 className="text-sm  lg:text-xl text-center text-gray-300
                            font-bold"><Typewriter options={{
                                autoStart:true,
                                loop:true,
                                delay:40,
                                strings:[
                                    "Get in Touch 🤝",
                                    "Send me an E-Mail 📧",
                                ]
                            }}/></h2>
            </div>
           
   
            <div className="flex items-center justify-center px-5 pb-2">
            
                <form onSubmit={sendEmail} className="space-y-6">
                    <div>
                        <input type="text" placeholder="Name" name="from_name" required
                        className="rounded-2xl focus:outline-none p-2 w-full bg-gray-200" />
                    </div>
                    <div>
                        <input type="email" placeholder="Email" name="from_email" required
                         className="rounded-2xl focus:outline-none p-2 w-full bg-gray-200" />
                    </div>
                    <div>
                        <textarea name="message" id="" placeholder="Message..." cols="50" rows="8" required
                         className="rounded-2xl focus:outline-none p-2 w-full bg-gray-2 bg-gray-200"></textarea>
                    </div>
                    <div className="flex justify-between items-center px-2">
                        <button type="submit"  className="rounded-full text-use-blue hover:text-white shadow-xl focus:outline-none bg-yellow-600 p-2">Send <i class="fas fa-paper-plane"></i></button>
                        <div className="flex text-white space-x-2 mb-2">
                            <a href="https://github.com/mahafuztechie" rel="noreferrer" target="_blank"><i className="text-xl text-use-blue hover:text-amber-600 bg-white w-7 h-7 shadow-xl transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/mahafuz-ahmed-39876812a" rel="noreferrer" target="_blank"><i className="text-xl text-use-blue hover:text-amber-600 bg-white w-7 h-7 shadow-xl transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-linkedin"></i></a>
                            {/* <a href="https://www.instagram.com/mahfuz.techie" rel="noreferrer" target="_blank"><i className="text-xl text-use-blue hover:text-amber-600 bg-white w-7 h-7 shadow-xl transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-instagram"></i></a>
                            <a href="https://www.facebook.com/mahafuzaadeez5" rel="noreferrer" target="_blank"><i className="text-xl text-use-blue hover:text-amber-600 bg-white w-7 h-7 shadow-xl transition duration-200 ease-in-out transform hover:scale-125 text-center rounded-full fab fa-facebook"></i></a> */}
                        </div>
                    </div>
                </form>   
            </div>  
         
        </div>
    )
}

export default Contact
