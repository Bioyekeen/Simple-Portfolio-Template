import React, {Suspense, lazy} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Spinner } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from "aos"  
import { useEffect } from 'react';
import "aos/dist/aos.css"



const Home = lazy(() => import("./Pages/Home"))
const About = lazy(() => import("./Pages/About"))
const Contact = lazy(() => import("./Pages/Contact"))
const Test= lazy(() => import("./Pages/Test"))
const Test2= lazy(() => import("./Pages/Test2"))
const Test3= lazy(() => import("./Pages/Test3"))
const Test4= lazy(() => import("./Pages/Test4"))


const App =() => {
useEffect(() =>{
  AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

return () => {
  AOS.refresh()
}
}, [])

    return (
      <Suspense fallback={<Spinner className="spinner" type='grow' size={"lg"} color={"success"}/>}>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Test' element={<Test/>}/>
          <Route path='/Test2' element={<Test2/>}/>
          <Route path='/Test3' element={<Test3/>}/>
          <Route path='/Test4' element={<Test4/>}/>
        </Routes>
      </BrowserRouter> 
      </Suspense>    
    )
  }


export default App