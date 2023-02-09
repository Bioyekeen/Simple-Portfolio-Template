import React, { useState } from 'react'
import { CardBody, Card,} from 'reactstrap'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import Logo from "./../Assets/logo.png"
import Biodun from "./../Assets/biodun.jpg"

function About() {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () =>{ 
      setCollapsed(!collapsed)
    }
  return (

    <div>
    <div>
      <Navbar expand={true} color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          <img src={Logo} alt="" />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className='m-auto'>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </div>

<div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L1440,256L1440,0L0,0Z"></path></svg>

 <h1 className='my-3 fw-bold text-info text-center'>About Me</h1>

 <div className="d-flex flex-md-row flex-column g-2 container">
 <Card className='py-4'>      
   <CardBody>
     <h1>
    <img className='img-fluid' src={Biodun} alt="" /> <hr />
     </h1>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     Id exercitationem dignissimos provident labore, eligendi et necessitatibus eveniet repudiandae corporis? 
     Hic voluptatibus culpa distinctio beatae, maiores possimus aperiam aspernatur aut vitae?
   </CardBody>
 </Card>

 <Card className='py-4'>      
   <CardBody>
    <h1>SKILLS</h1> <br></br>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     Id exercitationem dignissimos provident labore, eligendi et necessitatibus eveniet repudiandae corporis? 
     Hic voluptatibus culpa distinctio beatae, maiores possimus aperiam aspernatur aut vitae? <br></br><hr />


     <br></br><br></br><h1>PROJECT</h1><br></br>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     Id exercitationem dignissimos provident labore, eligendi et necessitatibus eveniet repudiandae corporis? 
     Hic voluptatibus culpa distinctio beatae, maiores possimus aperiam aspernatur aut vitae?


   </CardBody>
 </Card>

 <Card className='py-4'>      
   <CardBody>
   <h1>EDUCATION</h1>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     Id exercitationem dignissimos provident labore, eligendi et necessitatibus eveniet repudiandae corporis? 
     Hic voluptatibus culpa distinctio beatae, maiores possimus aperiam aspernatur aut vitae?
     <hr />
     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     Id exercitationem dignissimos provident labore, eligendi et necessitatibus eveniet repudiandae corporis? 
     Hic voluptatibus culpa distinctio beatae, maiores possimus aperiam aspernatur aut vitae?
     <hr />
     Lorem ipsum dolor sit amet consectetur adipisicing elit. 
     Id exercitationem dignissimos provident labore, eligendi et necessitatibus eveniet repudiandae corporis? 
     Hic voluptatibus culpa distinctio beatae, maiores possimus aperiam aspernatur aut vitae?
   </CardBody>
 </Card>
</div>

 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF7804" fill-opacity="1" d="M0,32L1440,160L1440,320L0,320Z"></path></svg>
</div>
</div>
          
  )
}


export default About;