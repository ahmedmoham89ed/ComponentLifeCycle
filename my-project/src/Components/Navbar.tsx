import React from 'react'

const Navbar = ({setpage}:{setpage:(page:"home"|"Blog"|"AboutUs"|"Login"|"Themes"|"Settings"|"Product"|"Hooks")=>void}) => {
  return (
    <>

      <ul className='flex items-center justify-center gap-20 text-xl font-medium bg-[#2980B9] py-4'>
        <li><a className='hover:text-[#AEB6BF] text-[#D5F5E3]  transition delay-75 ' onClick={()=>setpage("home")} >Home</a></li>
        <li><a className='hover:text-[#AEB6BF] text-[#D5F5E3]  transition delay-75 ' onClick={()=>setpage("Product")}>Product</a></li>
        <li><a className='hover:text-[#AEB6BF] text-[#D5F5E3]  transition delay-75 ' onClick={()=>setpage("AboutUs")}>About Us</a></li>
        <li><a className='hover:text-[#AEB6BF] text-[#D5F5E3]  transition delay-75 ' onClick={()=>setpage("Blog")}>Blog</a></li>
        <li><a className='hover:text-[#AEB6BF] text-[#D5F5E3]  transition delay-75 ' onClick={()=>setpage("Themes")}>Themes</a></li>
        <li><a className='hover:text-[#AEB6BF] text-[#D5F5E3]  transition delay-75 ' onClick={()=>setpage("Settings")}>Settings</a></li>
        <li><a className='hover:text-[#AEB6BF] text-[#D5F5E3]  transition delay-75 ' onClick={()=>setpage("Login")}>Login</a></li>
        <li><a className='hover:text-[#AEB6BF] text-[#D5F5E3]  transition delay-75 ' onClick={()=>setpage("Hooks")}>Hooks</a></li>
      </ul>
    
    </>
  )
}

export default Navbar