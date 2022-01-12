import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import Slogan from "./components/Slogan/Slogan";

function App() {
  const [windowSize,setWindowSize] = useState({
    width : undefined,
    height : undefined
  })
  const [isMobile, setIsMobile] = useState(false)
  useEffect(()=>{
    const handleSize = () => {
      setWindowSize({
        width:window.innerWidth,
        height : window.innerHeight
      })
    }
    window.addEventListener("resize", handleSize);
    return ()=> window.removeEventListener("resize",handleSize)
  },[])
  useEffect(()=>{
    
    if(windowSize.width < 500) {
      setIsMobile(true)
    }
    else {
      setIsMobile(false)
    }
  },[windowSize])
  return (
    <div className="h-screen bg-gradient-to-b from-blue-600 to-cyan-400 font-popins overflow-y-auto overflow-x-hidden">
      <div className="max-w-6xl mx-auto py-7 px-4 text-white">
        <NavBar />
        <Slogan />
        <Content />
      </div>
      
    </div>
  );
}

export default App;
