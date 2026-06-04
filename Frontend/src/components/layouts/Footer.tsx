const Footer = () => {
  return (
    <div className="bg-[#f4f1ea] text-black px-10 py-4 flex items-center justify-between">
      <div>
        <h2 className="font-bold text-2xl text-[#2d6a6a]">She Can Foundation</h2>
      </div>

      <div className="flex gap-8 items-center">
        <div>
          <p>© 2026 She Can Foundation. All rights reserved.</p>
        </div>

        <ul className="flex gap-8">
          <li className="hover:cursor-pointer hover:underline underline-offset-4 duration-300">Privacy Policy</li>
          <li className="hover:cursor-pointer hover:underline underline-offset-4 duration-300">Term of use</li>
          <li className="hover:cursor-pointer hover:underline underline-offset-4 duration-300">Support</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer