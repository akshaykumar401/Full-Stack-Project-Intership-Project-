import { useState } from "react"
import { RiCloseLine, RiBarChartHorizontalLine } from "@remixicon/react";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const handleNavbarOpen = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }

  return (
    <div className="bg-[#f4f1ea] relative">
      <div className="text-black flex items-center justify-between px-6 lg:px-16 py-4 border-b border-[#48a0a0]">
        <h1 className="font-bold text-2xl text-[#2d6a6a]">She Can Foundation</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-semibold">
          <li className="hover:cursor-pointer duration-300 hover:text-[#2a5252]">Home</li>
          <li className="hover:cursor-pointer duration-300 hover:text-[#2a5252]">About</li>
          <li className="hover:cursor-pointer duration-300 hover:text-[#2a5252] underline underline-offset-4 text-[#2d6a6a]">Contact</li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block bg-[#2d6a6a] text-white px-5 py-2 rounded-lg hover:bg-[#2a5252] hover:cursor-pointer duration-300 outline-none focus:outline-none">
          Apply Now
        </button>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center">
          <button onClick={handleNavbarOpen} className="focus:outline-none">
            {isNavbarOpen ? (
              <RiCloseLine
                size={26}
                color="#2d6a6a"
                className="close-icon"
              />
            ) : (
              <div className="rotate-180">
                <RiBarChartHorizontalLine 
                  size={26}
                  color="#2d6a6a"
                  className="bar-icon"
                />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#f4f1ea] border-b border-[#48a0a0] z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          isNavbarOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 font-semibold py-8 shadow-lg">
          <li className="hover:cursor-pointer duration-300 hover:text-[#2a5252]">Home</li>
          <li className="hover:cursor-pointer duration-300 hover:text-[#2a5252]">About</li>
          <li className="hover:cursor-pointer duration-300 hover:text-[#2a5252] underline underline-offset-4 text-[#2d6a6a]">Contact</li>
          <li>
            <button className="bg-[#2d6a6a] text-white px-6 py-2 rounded-lg hover:bg-[#2a5252] hover:cursor-pointer duration-300 mt-2">
              Apply Now
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header