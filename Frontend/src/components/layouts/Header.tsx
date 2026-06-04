const Header = () => {
  return (
    <div className="bg-[#f4f1ea] text-black flex items-center justify-around py-4">
      <h1 className="font-bold text-2xl text-[#2d6a6a]">She Can Foundation</h1>

      <ul className="flex gap-6 font-semibold">
        <li className="hover:cursor-pointer duration-300 hover:text-[#2a5252]">Home</li>
        <li className="hover:cursor-pointer duration-300 hover:text-[#2a5252]">About</li>
        <li className="hover:cursor-pointer duration-300 hover:text-[#2a5252] underline underline-offset-4 text-[#2d6a6a]">Contact</li>
      </ul>

      <button className="bg-[#2d6a6a] text-white px-4 py-2 rounded-lg hover:bg-[#2a5252] hover:cursor-pointer duration-300">
        Apply Now
      </button>
    </div>
  )
}

export default Header