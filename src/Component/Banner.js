import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import BannerImg from "./../Assets/girls.png"
//import ScrollText from 'react-scroll-text'

function Banner() {
  return (
   <div className="banner">

    <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6}>

            <div data-aos="zoom-in" data-aos-duration="600">
                <h2 className='welc'> Welcome To </h2>
                <p className='welcp'>The lorem ipsum is a placeholder text used in publishing and graphic design. 
                This filler text is a short paragraph that contains all the letters of the alphabet. 
                The characters are spread out evenly so that the reader's attention is focused
                 on the layout of the text instead of its content.</p>

            </div>  

            </Col>

            <Col xs={12} md={6}>
            <img className='img-fluid' src={BannerImg} alt="" />
            </Col>
        </Row>
    </Container>

   </div>
  )
}

export default Banner