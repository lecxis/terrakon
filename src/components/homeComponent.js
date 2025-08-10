import Container from 'react-bootstrap/Container';
import {Button, Row, Col} from 'react-bootstrap';

function HomeComponent() {

function clickMe(string){
console.log(string);
console.log('lets engage the api');		
			const postData = {
  "email": "superadmin@gmail.com",
  "password": "123Pa$$word!"
}
const tenantId= 'defaulthtac';


fetch('https://htacapi.onrender.com/api/defaulthtac/Account/authenticate', 
{
  method: 'POST', // Specify the HTTP method
  headers: {
    'X-TenantDomain': 'htacapi.onrender.com',
	'Content-Type': 'application/json' // Set the content type of the request body
	
  },
  body: JSON.stringify(postData) // Convert the JavaScript object to a JSON string
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('User created:', data);
  })
  .catch(error => {
    console.error('Error creating user:', error);
  });
     
}

  return (

    <div className='my-5'>
    <Row className="align-items-center">
        <Col sm={8} className="mx-auto bg-light p-4">
        <h4> Providing Enginnering Excellence is what we Do Here</h4>
                    <p> Xxxx consult is poised tpo deliver the best sevices in terms of excellence. The truth 
                      is I am just creating a template for the website. however, when the site is ready This
                      Part will make more sense. Nevertheless, you can be rest assured that xxx will deliver the 
                      best service as far as site investigation and characterization are concern. All our services
                      are done with best practise in mind.  <Button outline> Read More</Button>
                    </p>
        
        </Col>
        <Col sm={4} xs={12} lg={{ order: 'first' }}>
        
        <img
    src={process.env.PUBLIC_URL + '/asset/images/ship-rig.jpg'}
         alt="Rig beside a ship" width = "360" 
         className="img-fluid m-6"

       />
        </Col>
      </Row>

      <Row className="mx-auto bg-light p-4">
       
        <Col xs={12} className="text-center"  >
             <h4 className="mt-5"> Geothechnical and  Structural Integrity Services</h4>

             <p className=" mt-4"> Our approach is to utilize the best working condition in factoring a proper channel</p>
        </Col>

        <Col xs={12} >
              <Row className="mt-5 align-items-center text-center">
                <Col md ={4} lg={3} className= "justify-content-center " >
                      <img
    src={process.env.PUBLIC_URL + '/asset/images/ship-rig.jpg'}
         alt="Rig beside a ship" width = "80" 
        // className="img-fluid m-6"
       />
       <h6 className="my-5">Geotechnical Soil Investigation</h6>

       <p>
        Designing anad constructing a strong and resilient foundation is mostly dependent on the geotechnical
        soil investigation carried out. Carefull analysis and detailed soil test will go a long way in determinig the 
        success of the foundation.
       </p>
                </Col>

                <Col md ={4} lg={3}>
                      <img
    src={process.env.PUBLIC_URL + '/asset/images/ship-rig.jpg'}
         alt="Rig beside a ship" width = "80" 
        // className="img-fluid m-6"
       />
       <h6 className="my-5">Super-structure and sub-structure appraisal</h6>

       <p>
        Designing anad constructing a strong and resilient foundation is mostly dependent on the geotechnical
        soil investigation carried out. Carefull analysis and detailed soil test will go a long way in determinig the 
        success of the foundation.
       </p>
                </Col>

                <Col md ={4} lg={3}>
                      <img
    src={process.env.PUBLIC_URL + '/asset/images/ship-rig.jpg'}
         alt="Rig beside a ship" width = "80" 
        // className="img-fluid m-6"
       />
       <h6 className="my-5">Pile instalation</h6>

       <p>
        Designing anad constructing a strong and resilient foundation is mostly dependent on the geotechnical
        soil investigation carried out. Carefull analysis and detailed soil test will go a long way in determinig the 
        success of the foundation.
       </p>
                </Col>

                <Col md ={4} lg={3}>
                      <img
    src={process.env.PUBLIC_URL + '/asset/images/ship-rig.jpg'}
         alt="Rig beside a ship" width = "80" 
        // className="img-fluid m-6"
       />
       <h6 className="my-5">Pile Integrity Testing</h6>

       <p>
        Designing anad constructing a strong and resilient foundation is mostly dependent on the geotechnical
        soil investigation carried out. Carefull analysis and detailed soil test will go a long way in determinig the 
        success of the foundation.
       </p>
                </Col>
                </Row>      
        </Col>

      </Row>

        This is where the body will lie

        <Row md={6}>
         <Button outline onClick={()=>{clickMe('buut')}} >
          <span className="fa fa-sign-in fa-lg"></span> Login</Button>
        </Row>
       
    </div>
  )};


 export default HomeComponent; 