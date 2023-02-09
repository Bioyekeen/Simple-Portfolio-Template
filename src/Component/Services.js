import React from 'react'
import { CardBody, Card,} from 'reactstrap'
import {RiWebcamFill} from "react-icons/ri"

function Services() {
  return (
    <div>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L1440,256L1440,0L0,0Z"></path></svg>

      <h1 className='my-3 fw-bold text-info text-center'>AVAILABLE SERVICE</h1>

      <div className="d-flex flex-md-row flex-column g-2 container">
      <Card className='py-4'>      
        <CardBody>
          <h1>
            <RiWebcamFill size={32}/>
          </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Id exercitationem dignissimos provident labore, eligendi et necessitatibus eveniet repudiandae corporis? 
          Hic voluptatibus culpa distinctio beatae, maiores possimus aperiam aspernatur aut vitae?
        </CardBody>
      </Card>

      <Card className='py-4'>      
        <CardBody>
          <h1>
            <RiWebcamFill size={32}/>
          </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Id exercitationem dignissimos provident labore, eligendi et necessitatibus eveniet repudiandae corporis? 
          Hic voluptatibus culpa distinctio beatae, maiores possimus aperiam aspernatur aut vitae?
        </CardBody>
      </Card>

      <Card className='py-4'>      
        <CardBody>
          <h1>
            <RiWebcamFill size={32}/>
          </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Id exercitationem dignissimos provident labore, eligendi et necessitatibus eveniet repudiandae corporis? 
          Hic voluptatibus culpa distinctio beatae, maiores possimus aperiam aspernatur aut vitae?
        </CardBody>
      </Card>
    </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FF7804" fill-opacity="1" d="M0,32L1440,160L1440,320L0,320Z"></path></svg>
    </div>
    
    
  )
}

export default Services