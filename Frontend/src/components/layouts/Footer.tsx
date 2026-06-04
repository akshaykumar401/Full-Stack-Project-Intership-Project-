const Footer = () => {
  return (
    <div className="bg-[#f4f1ea] text-black px-6 md:px-10 py-8 md:py-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
      <div>
        <h2 className="font-bold text-2xl text-[#2d6a6a] text-center md:text-left">She Can Foundation</h2>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-8 items-center">
        <div className="text-center md:text-left text-sm md:text-base">
          <p>© 2026 She Can Foundation. All rights reserved.</p>
        </div>

        <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-sm md:text-base">
          <li className="hover:cursor-pointer hover:underline underline-offset-4 duration-300">Privacy Policy</li>
          <li className="hover:cursor-pointer hover:underline underline-offset-4 duration-300">Term of use</li>
          <li className="hover:cursor-pointer hover:underline underline-offset-4 duration-300">Support</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer