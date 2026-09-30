import {Globe,ChevronDown, User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../../assets/logo.png'
function Navbar() {
  const[menuOpen, setMenuOpen]= useState(false)
  return (
    <nav className=" w-full fixed top-0 left-0 z-50 w-full  flex items-center justify-between px-8 py-4 lg:py-5 lg:bg-[#133D2F] ">
      <div className="flex items-center shrink-0 gap-2">
        <img src={logo} alt="logo" />
      <h1 className="text-2xl font-bold text-[#133D2F] lg:text-white ">
        KisanSaathi
      </h1>
</div>
      <div className="hidden lg:flex gap-10 mx-auto text-white">
        <div className="group">
        <a className="hover:text-[#34D399] duration-300 relative transition-transform " href="#home">
          <span>Home</span>
          <span className=" absolute left-0 w-0 h-[2px] bg-[#34D399] -bottom-1 group-hover:w-full transition-all duration-300 "></span>
          </a>
          </div>
        <div className="group">
        <a href="#how-it-works" className="hover:text-[#34D399] duration-300 relative transition-transform ">
          <span>How We Works</span>
          <span className=" absolute left-0 w-0 h-[2px] bg-[#34D399] -bottom-1 group-hover:w-full transition-all duration-300 "></span>
          </a>
          </div>
        <div className="group">
        <a className="hover:text-[#34D399] duration-300 relative transition-transform " href="#Smart-linkage">
          <span>Smart Linkage</span>
          <span className=" absolute left-0 w-0 h-[2px] bg-[#34D399] -bottom-1 group-hover:w-full transition-all duration-300 "></span>
          </a>
          </div>
        <div className="group">
        <a className="hover:text-[#34D399] duration-300 relative transition-transform " href="#Why-us">
          <span>Why Us?</span>
          <span className=" absolute left-0 w-0 h-[2px] bg-[#34D399] -bottom-1 group-hover:w-full transition-all duration-300 "></span>
          </a>
          </div>
      </div>

      <div className="hidden lg:flex items-center gap-8 mr-8">
        <button className='flex items-center gap-3 px-3 py-2 border-2 rounded-full bg-transparent border-[#34D399] text-white'>
          <Globe className='text-[#34D399]'/>
          English
        <ChevronDown/>
        </button>
        <button className=" group p-2 border-2 rounded-full border-[#34D399] hover:bg-[#34D399] cursor-pointer transition-all duration-300 ">
        <User className="text-[#34D399] group-hover:text-white "/>
        </button>
      </div>
      <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="lg:hidden text-[#133D2F] cursor-pointer"
>
  {menuOpen ? <X size={28} /> : <Menu size={28} />}
</button>
<div
  className={`absolute top-full right-4 z-50 w-64 lg:hidden
    rounded-2xl border border-white/20
    bg-[#133D2F]/70 backdrop-blur-xl
    shadow-xl
    transition-all duration-300 ease-out
    ${menuOpen
      ? "translate-x-0 opacity-100"
      : "translate-x-8 opacity-0 pointer-events-none"
    }`}
>
  <div className="flex flex-col gap-5 p-6 text-white">

    <a href="#home" className="hover:text-[#34D399] transition-colors">
      Home
    </a>

    <a href="#how-it-works" className="hover:text-[#34D399] transition-colors">
      How We Works
    </a>

    <a href="#Smart-linkage" className="hover:text-[#34D399] transition-colors">
      Smart Linkage
    </a>

    <a href="#Why-us" className="hover:text-[#34D399] transition-colors">
      Why Us?
    </a>

    <div className="h-px bg-white/20" />

    <button className="flex items-center gap-3 text-white">
      <Globe className="text-[#34D399]" />
      English
      <ChevronDown size={18} />
    </button>

    <button className="flex items-center gap-3 text-white">
      <User className="text-[#34D399]" />
      Profile
    </button>

  </div>
</div>
    </nav>
  )
}

export default Navbar