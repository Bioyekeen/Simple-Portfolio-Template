import React from 'react'
import Header from "./../Component/Header"
import Banner from "./../Component/Banner"
import Services from '../Component/Services'
import Footer from '../Component/Footer'

function Home() {
  return (

    
    <div className="home">
      <Header/>
      <Banner/><br></br>
      <Services/>
      <Footer/>
    </div>
 
  )
}

export default Home