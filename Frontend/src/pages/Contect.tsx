import interview from "../assets/Images/Interview.png"
import userImage from "../assets/Images/image.png"
import { RiHandHeartLine } from "@remixicon/react";

const Contect = () => {
  return (
    <div className="min-h-screen bg-[#E5E2DB] pt-20 flex items-center justify-center gap-10 pb-12">
      {/* Section for Display Content */}
      <section className="w-[30%] min-h-screen flex flex-col items-center gap-5">
        <div className="w-full h-[58vh] mx-auto rounded-lg bg-[#FFFFFF] border-2 border-gray-300 flex flex-col px-4 py-8">
          {/* Donate Icons */}
          <div className="border-2 border-gray-300 rounded-lg p-2 w-16 h-16 flex items-center justify-center bg-[#B1EEED]">
            <RiHandHeartLine
              size={32}
              color="#2d6a6a"
            />
          </div>
          {/* text */}
          <h3 className="text-2xl mt-6 font-bold">
            Supporting Your Journey
          </h3>
          {/* Paragraph */}
          <p className="border-l-5 border-[#2d6a6a] px-4 mt-4">
            "We know many students are still exploring development and may not have advanced technical knowledge yet. Our intention is not to make the process difficult, but to provide students a fair chance to participate and showcase their interest in tech."
          </p>
          {/* Director */}
          <div className="flex items-center gap-4 mt-8">
            <img src={userImage} alt="Director of Talent" className="w-12 h-12 rounded-full" />
            <div>
              <h1 className="font-bold text-lg">Director of Talent</h1>
              <p className="text-sm text-gray-600">She Can Foundation</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[38vh]  overflow-hidden rounded-lg relative">
          {/* adding the black background in image */}
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <img src={interview} alt="Reference Im" className="w-full h-full object-cover object-right opacity-80 hover:scale-120 transition-transform duration-300" />
          <p className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-center p-4 text-black text-2xl font-bold">
            Join US.
          </p>
        </div>
      </section>


      {/* Section for contect form */}
      <section className="w-[45%] min-h-screen bg-white ">

      </section>
    </div>
  )
}

export default Contect