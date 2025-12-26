import Container from 'react-bootstrap/Container';
import {Button, Row, Col, Form} from 'react-bootstrap';

function HomeComponent() {



    return (
        <div className=" bg-dark text-white"  id="Contact">

      <Row className="align-items-center">
        <Col className="text-center" >
        
     
        <h1 className="p-5">Contact Us</h1>

        <h2> Reach out to us for quality Geotechnical Services</h2>

           </Col>
      </Row>


     <Row className=' p-3 '>
       <Col md={6}>
        <h2 className="ps-2"> Get in touch</h2>

         <h5 className="text-white p-2 pt-1">
            Thank you for your interest in XXXconsult . We are happy to work with you in studying the subsurface 
            in order to make the best design descision.

         </h5>

        
                   <h3 className="ps-5">Contact Information</h3>
                    <address className="ps-5 fw-bold">
                      <Row className="p-2 align-items-center">
                        <Col xs={1}> <i className="bi bi-geo-alt px-0 align-middle"></i> </Col>
		              <Col>
                  XXXXconsult avenue, <br />
		              Ikeja, Lagos state,<br />
		              Nigeria<br />
                    </Col>
                     </Row>
                       <Row>
                        <p><i className="bi bi-phone fa-lg"></i>: +234 8161 83 1481, +234 816 183 1481</p>
                        </Row>
                        <Row>
                          <p>
                          <i className="bi bi-envelope-at fa-lg "></i>
                          <a href="mailto:oloniluaolalekan@gmail.com" className="text-white">
                          : info@xxxconsult.com</a>
                          </p>
                        </Row>
		              
                      </address>

       </Col>

       <Col className="pt-5">
       <h5 className="text-center"> Kindly provide us with the following information and we will put you in touch with the right person</h5>

            <Form>
        <Form.Group className="mb-3" controlId="controlName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="input" placeholder="Enter your first and last name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="controlEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="controlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

         <div className="text-center">
       <Button variant="primary" type="submit" size="lg">
            Submit
          </Button>
             </div>
    </Form>
       </Col>

     </Row>
      

     </div>
 )
}


 export default HomeComponent;

