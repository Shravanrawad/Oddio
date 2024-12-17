import {React, useState} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Video from "./pages/Video"
import Navbar from "./componants/Navbar"



function App() {

   const [videos, setVideos] = useState([]);
 
  return (
   <BrowserRouter>
     <Navbar setVideos={setVideos} />
      <Routes>
        <Route path="/" element={<Home videos={videos}/>}/>
        <Route path="/video/:id" element={<Video/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
