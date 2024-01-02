import React from "react";

import { Routes,Route } from "react-router-dom";
import Home from "./React-Router-Dom/Home";
import About from "./React-Router-Dom/About";
import Contact from "./React-Router-Dom/Contact";
import Reactjs from "./React-Router-Dom/React";
import Navbar from "./React-Router-Dom/Navbar";
import Success from "./React-Router-Dom/Success";
import 'bootstrap/dist/css/bootstrap.min.css'
import NotFound from "./React-Router-Dom/NotFound";
import FeaturedProjects from "./React-Router-Dom/FeaturedProjects";
import NewProjects from "./React-Router-Dom/NewProjects";
import Projects from "./React-Router-Dom/Projects";


const App=()=>
{
  return(
  <div className="text-center">
  <Navbar/>

  <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/react" element={<Reactjs/>}/>
    <Route path="/success" element={<Success/>}/>
    <Route path="*" element={<NotFound/>}/>
    <Route path="/projects" element={<Projects/>}>
      <Route index element={<FeaturedProjects/>}/>
      <Route path="featured" element={<FeaturedProjects/>}/>
      <Route path="new" element={<NewProjects/>}/>
    </Route>
  </Routes>


    </div>
  )
}
export default App;