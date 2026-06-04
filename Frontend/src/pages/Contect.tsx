import interview from "../assets/Images/Interview.png"
import userImage from "../assets/Images/image.png"
import { RiHandHeartLine, RiCheckboxCircleFill } from "@remixicon/react";
import { useState } from "react";

const Contect = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmit,setIsSubmit]=useState(false);

  const handleFormSubmit=(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log({
      name,
      email,
      message
    });    

    setIsSubmit(true);

    // Clear the form
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(()=>{
      setIsSubmit(false);
    },5000);
  }

  return (
    <div className="min-h-screen bg-[#E5E2DB] pt-20 flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-10 px-6 lg:px-12 pb-12">
      {/* Section for Display Content */}
      <section className="w-full lg:w-[35%] flex flex-col items-center gap-5">
        <div className="w-full lg:h-[58vh] mx-auto rounded-2xl bg-[#FFFFFF] border-2 border-gray-200 flex flex-col px-6 py-8 shadow-sm">
          {/* Donate Icons */}
          <div className="border-2 border-gray-200 rounded-xl p-3 w-16 h-16 flex items-center justify-center bg-[#B1EEED] shadow-sm">
            <RiHandHeartLine
              size={32}
              color="#2d6a6a"
            />
          </div>
          {/* text */}
          <h3 className="text-2xl mt-6 font-bold text-gray-800">
            Supporting Your Journey
          </h3>
          {/* Paragraph */}
          <p className="border-l-4 border-[#2d6a6a] px-4 mt-6 text-gray-600 leading-relaxed italic">
            "We know many students are still exploring development and may not have advanced technical knowledge yet. Our intention is not to make the process difficult, but to provide students a fair chance to participate and showcase their interest in tech."
          </p>
          {/* Director */}
          <div className="flex items-center gap-4 mt-auto pt-8">
            <img src={userImage} alt="Director of Talent" className="w-14 h-14 rounded-full border-2 border-gray-200 object-cover" />
            <div>
              <h1 className="font-bold text-lg text-gray-800">Director of Talent</h1>
              <p className="text-sm text-[#2d6a6a] font-medium">She Can Foundation</p>
            </div>
          </div>
        </div>
        
        <div className="w-full h-[300px] lg:h-[38vh] overflow-hidden rounded-2xl relative shadow-sm border-2 border-gray-200 group">
          {/* adding the black background in image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10 transition-opacity duration-300 group-hover:opacity-80"></div>
          <img src={interview} alt="Reference Im" className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" />
          <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white text-3xl font-bold z-20 tracking-wide">
            Join Us.
          </p>
        </div>
      </section>

      {/* Section for contect form */}
      <section className="w-full lg:w-[45%] bg-white p-8 lg:p-12 rounded-2xl border-2 border-gray-200 shadow-sm flex flex-col justify-center">
        <div className="mb-2">
          <h2 className="text-3xl font-bold text-[#2d6a6a] mb-2">
            Application Form
          </h2>
          <p className="text-gray-500 text-lg">
            Complete the details below to submit your task.
          </p>
        </div>
        
        {/* Form */}
        <form className="mt-8 flex flex-col gap-6" onSubmit={handleFormSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
            <input 
              type="text" 
              className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#2d6a6a]/50 focus:border-[#2d6a6a] transition-all bg-gray-50 text-gray-800 shadow-sm" 
              placeholder="John Doe" 
              required 
              id="name"
              name="name" 
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
            <input 
              type="email" 
              className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#2d6a6a]/50 focus:border-[#2d6a6a] transition-all bg-gray-50 text-gray-800 shadow-sm" 
              placeholder="john@example.com" 
              required 
              name="email" 
              id="email" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
            <textarea 
              className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#2d6a6a]/50 focus:border-[#2d6a6a] transition-all bg-gray-50 text-gray-800 resize-none shadow-sm" 
              placeholder="Tell us about yourself..." 
              required 
              name="message" 
              id="message" 
              rows={5}
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#2d6a6a] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#1f4a4a] hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl mt-4 flex justify-center items-center gap-2 cursor-pointer outline-none"
          >
            Submit Application
          </button>
        </form>
      </section>

      {/* Success Notification Toast */}
      <div 
        className={`fixed bottom-8 right-8 bg-[#2d6a6a] text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 transform transition-all duration-500 z-50 ${
          isSubmit ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        <RiCheckboxCircleFill size={28} className="text-[#B1EEED]" />
        <div>
          <h4 className="font-bold text-lg leading-tight">Success!</h4>
          <p className="text-sm opacity-90 mt-0.5">Your application has been submitted.</p>
        </div>
      </div>
    </div>
  )
}

export default Contect