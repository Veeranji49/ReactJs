import React from "react";

import { Routes,Route } from "react-router-dom";
import Home from "./Lazy-Loading/Home";
//import About from "./React-Router-Dom/About";
import Contact from "./Lazy-Loading/Contact";
import Reactjss from "./Lazy-Loading/Reactjss";
import Navbar from "./Lazy-Loading/Navbar";
import Success from "./Lazy-Loading/Success";
import 'bootstrap/dist/css/bootstrap.min.css'

import NotFound from "./Lazy-Loading/NotFound";
import FeaturedProjects from "./Lazy-Loading/FeaturedProjects";
import NewProjects from "./Lazy-Loading/NewProjects";
import Projects from "./Lazy-Loading/Projects";

const LazyLoad=React.lazy(()=>import("./Lazy-Loading/About"))

const App=()=>
{
  return(
  <div className="text-center">
  <Navbar/>

  <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<React.Suspense fallback="Loading..."><LazyLoad/></React.Suspense>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/react" element={<Reactjss/>}/>
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