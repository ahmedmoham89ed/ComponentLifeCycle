import './App.css'
import Navbar from './Components/Navbar'
import Blog from "./Components/Blog.tsx"
import Home from "./Components/Home.tsx"
import Login from "./Components/Login.tsx"
import AboutUs from "./Components/AboutUs.tsx"
import Themes from "./Components/Themes.tsx"
import Settings from "./Components/Settings.tsx"
import Product from "./Components/Product.tsx"
import Hooks from './Components/Hooks.tsx'
import { useState } from 'react'
function App() {
  const [page,setpage]=useState("home"|"Blog"|"AboutUs"|"Login"|"Themes"|"Settings"|"Product"|"Hooks");
  return (
    <>
        <Navbar setpage={setpage} />
        <div className="container flex justify-between items-center ">
            
            {page ==="home" && <Home/>}
            {page ==="Blog" && <Blog/>}
            {page ==="AboutUs" && <AboutUs/>}
            {page ==="Login" && <Login/>}
            {page ==="Themes" && <Themes/>}
            {page ==="Settings" && <Settings/>}
            {page ==="Product" && <Product/>}
            {page ==="Hooks" && <Hooks/>}
          
        </div>
    </>
  )
}

export default App
