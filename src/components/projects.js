import {Button, Row, Col, Form} from 'react-bootstrap';

function Projects() {



    return (
        <div className="my-5">
             <Row  className="my-5 text-center" >
                <Col>
                <h2>
                    Featured Projects
                </h2>
                <p> Below are some of the executed projects</p>
                </Col>
                </Row>

                 <Row className="mt-5 align-items-center text-center">

                    <Col md ={4} className= "justify-content-center " >
                                          <img
                        src={process.env.PUBLIC_URL + '/asset/images/ship-rig.jpg'}
                             alt="Rig beside a ship" width = "200" 
                            // className="img-fluid m-6"
                           />
                           <h6 className="my-5">Geotechnical Soil Investigation at Apapa</h6>
                    </Col>

                      <Col md ={4} className= "justify-content-center " >
                                          <img
                        src={process.env.PUBLIC_URL + '/asset/images/ship-rig.jpg'}
                             alt="Rig beside a ship" width = "200" 
                            // className="img-fluid m-6"
                           />
                           <h6 className="my-5">Foundation appraisial at Ibadan</h6>
                    </Col>

                      <Col md ={4} className= "justify-content-center " >
                                          <img
                        src={process.env.PUBLIC_URL + '/asset/images/ship-rig.jpg'}
                             alt="Rig beside a ship" width = "200" 
                            // className="img-fluid m-6"
                           />
                           <h6 className="my-5">Pile Foundation construction at Abeokuta</h6>
                    </Col>

                 </Row>
            
        </div>

    )
}

export default Projects;