//import {NavLink} from 'react-router-dom';
//http://localhost:3000/terrakon "http://localhost:3000/terrakon/asset/images/ship-rig.jpg"/

//import background from "http://localhost:3000/terrakon/asset/images/ship-rig.jpg";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
export default function Header() {
    return (
//         <header className="App-header"  style={{ 
//           backgroundImage: `url(${process.env.PUBLIC_URL + '/asset/images/drillers-rig.jpg'})`,
//           backgroundRepeat: 'no-repeat',
//           height: '700px'
          
//           }}>
//            <nav className="menu" >
//             <div className="logo">
//       <img
//         src="https://i.imgur.com/MK3eW3Am.jpg"
//         alt="Katherine Johnson" width = "80" 
//       />
//       <p> TerraKon Consult</p>
//       </div>
     
//   <ul>
//     <li><a href="#">Home</a></li>
//     <li><a href="#">About</a></li>
//     <li><a href="#">Contact</a></li>
//   </ul>
// </nav>
// <div className="intro-body">
// <p>Redefining soil testing and ground water exploration</p>
// </div>
// </header>
<div className="position-relative" style={{ 
             backgroundImage: `url(${process.env.PUBLIC_URL + '/asset/images/drillers-rig.jpg'})`,
              backgroundRepeat: 'no-repeat',
               backgroundSize: 'cover',
           height: '100vh',
           width:'100%',
         
              
        }}>
  <Navbar expand="lg" className="navbar-dark" >
     <Container>
<Navbar.Brand href="#home">
<img
    src="https://i.imgur.com/MK3eW3Am.jpg"
         alt="Katherine Johnson" width = "80" 
       />
  <p> XXXXY Consult</p></Navbar.Brand>


  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#link">History</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="#deets">Other services</Nav.Link>
          </Nav>
          <Form className="d-flex">
          <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            <Button variant="outline-success"> Search</Button>
          </Form>
          </Navbar.Collapse>
        </Container>
  </Navbar>

  <div className="intro-body position-absolute bottom-0 left-50">
<p >Redefining geotechnical soil investigation, foundation design,
   and groundwater exploration!</p>
</div>

  </div>
     
    )
  }