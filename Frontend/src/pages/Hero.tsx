import CheckBox from "../assets/Images/CheckBox.png"

const Hero = () => {
  return (
    <div className="h-[65vh] w-full bg-[#f4f1ea] flex flex-col justify-center items-center">
      <h2 className="text-3xl md:text-5xl text-center font-bold mb-4 text-[#2d6a6a]">
        Full Stack Development Internship Task
      </h2>
      <p className="text-black w-4/5 md:w-3/4 lg:w-1/2 text-center">
        Create a simple webpage with one basic form for She Can Foundation. Show us your approach to building user-centric interfaces.
      </p>
      {/* Features Section */}
      <div className="flex flex-wrap gap-4 mt-5 justify-center">
        <div className="flex items-center gap-2">
          <img src={CheckBox} alt="Check Box" className="size-6" />
          <p>Responsive Design</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={CheckBox} alt="Check Box" className="size-6" />
          <p>Form Validation</p>
        </div>
        <div className="flex items-center gap-2">
          <img src={CheckBox} alt="Check Box" className="size-6" />
          <p>Clean Architecture</p>
        </div>
      </div>
    </div>
  )
}

export default Hero