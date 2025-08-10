import Container from 'react-bootstrap/Container';
import {Button, Row, Col, Form} from 'react-bootstrap';

function HomeComponent() {



    return (
        <div className="my-5"  id="Contact">



      <Row className="align-items-center">
        <Col className="text-center" >
        
     
        <h1>Contact Us</h1>

        <h2> Reach out to us for quality Geotechnical Services</h2>

           </Col>
      </Row>

      <Row className="bg-dark p-5">
            <Col md={6}>
         <h3 className="text-white p-5">
            Get in ntouch with us today and discover seamless service delivery 
            as we begin to extract every useful information about the underground
            essentially important in design decision making

         </h3>
            
            </Col>
          

            <Col>
                   <h3 className="text-white p-5">
                <h3>Our Address</h3>
                    <address>
		              XXXXconsult avenue, <br />
		              Ikeja, Lagos state,<br />
		              Nigeria<br />
                      <i className="fa fa-phone fa-lg"></i>: +234 8161 83 1481<br />
		              <i className="fa fa-fax fa-lg"></i>: +234 816 183 1481<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:oloniluaolalekan@gmail.com">
                         info@xxxconsult.com</a>
                      </address></h3>
            </Col>
      </Row>

      <Row>
        <Col>
        <h2 className="text-center"> Get in touch</h2>

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

