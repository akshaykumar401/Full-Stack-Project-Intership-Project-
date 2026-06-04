import React, { useState } from "react";
import { RiArrowRightLongLine } from "@remixicon/react";

const LoginForm = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f1ea] p-4 font-sans relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#2d6a6a] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#e8a598] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="w-full max-w-md p-8 md:p-10 rounded-3xl bg-white/60 backdrop-blur-xl shadow-2xl border border-[#2d6a6a]/10 relative z-10 group">
        
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-[#2d6a6a] tracking-tight">
            Admin Portal
          </h2>
          <p className="text-[#2d6a6a]/70 mt-3 text-sm font-medium tracking-wide">
            Enter your credentials to continue
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#2d6a6a] uppercase tracking-wider ml-1">Username</label>
            <div className="relative">
              <input 
                type="text" 
                placeholder="admin" 
                className="w-full px-5 py-3.5 rounded-xl bg-white/80 border border-[#2d6a6a]/20 text-[#2d6a6a] placeholder-[#2d6a6a]/40 focus:outline-none focus:ring-2 focus:ring-[#e8a598] focus:border-[#e8a598] transition-all duration-300 shadow-sm"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-xs font-bold text-[#2d6a6a] uppercase tracking-wider">Password</label>
            </div>
            <div className="relative">
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full px-5 py-3.5 rounded-xl bg-white/80 border border-[#2d6a6a]/20 text-[#2d6a6a] placeholder-[#2d6a6a]/40 focus:outline-none focus:ring-2 focus:ring-[#e8a598] focus:border-[#e8a598] transition-all duration-300 shadow-sm"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              className="w-full py-4 px-4 bg-[#2d6a6a] hover:bg-[#e8a598] text-[#f4f1ea] hover:text-[#2d6a6a] font-bold rounded-xl shadow-lg shadow-[#2d6a6a]/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Access Dashboard</span>
              <RiArrowRightLongLine
                size={20}
                color="#FFFFFF"
                stroke="currentColor"
                strokeWidth={2}
                className="text-[#f4f1ea]"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm;