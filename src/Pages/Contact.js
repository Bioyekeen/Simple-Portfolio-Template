import React, { /*useState*/ useRef } from 'react'
import { Col, Container, Row } from 'reactstrap'



function Contact() {

  //const [name, setFname ] = useState("")
  //const [email, setEmail ] = useState("")
  //const [message, setMessage ] = useState("")
 
  const name = useRef("")
  const email = useRef("")
  const message = useRef("")

    const handleClick = () =>{
  
   //   if(name === "" || email === "" || message === ""){
   //     alert("input cannot be empty")
   //   }else{
   //     console.log(name,email,message)
   //   }
//
   // }

   console.log(name.current.value)
    }

  return (
    <div className='contacts' data-aos="flip-in" data-aos-duration="10000">
      <h3 className='text-center'>24/7 Ar Your Service</h3>

      <Container>
        <Row>
              <Col xs={12} md={6}>
                <form>
                  {/*
                  <div>
                    <label htmlFor="" className="form-label d-block">Name</label>
                    <input type="text" value={name} onChange={(e) => setFname(e.target.value)} className='form-control' />
                  </div>

                  <div>
                    <label htmlFor="" className="form-label d-block">Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' />
                  </div>

                  <div>
                    <label htmlFor="" className="form-label d-block">Message</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className='form-control' />

                  </div>
                  */}

<div>
                    <label htmlFor="" className="form-label d-block">Name</label>
                    <input ref={name} className='form-control' />
                  </div>

                  <div>
                    <label htmlFor="" className="form-label d-block">Email</label>
                    <input ref={email}  className='form-control' />
                  </div>

                  <div>
                    <label htmlFor="" className="form-label d-block">Message</label>
                    <textarea ref={message} className='form-control' />
 
                  </div>

                    <button type='button' onClick={handleClick} className="btn  btn-md btn-info my-2" >Message Now</button>
                </form>
              </Col>

              <Col xs={12} md={6}>
            <img className="map"src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" alt="" />
              </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact