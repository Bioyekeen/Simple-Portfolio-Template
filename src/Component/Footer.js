import React from 'react'
import { Col, Container, Row } from 'reactstrap'

import {BsFacebook} from "react-icons/bs"
function Footer() {
    return (
      <div className="Footer">
        <Container>
            <Row>
                <Col xs={12} md={4}>
                <h3 className="fw-bold text-white"Yekeen Biodun> </h3>
                <p>lorem</p>
                </Col>
         
                <Col xs={12} md={4}>
                <h3 className="fw-bold text-white"Yekeen Biodun> </h3>
                <p>lorem</p>
                </Col>
          
                <Col xs={12} md={4}>
               
                <BsFacebook/>
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
  
  export default Footer