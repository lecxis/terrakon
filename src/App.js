import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/homeComponent';
import Contact from './components/contact';
import Projects from './components/projects';


function App() {
  return (
    <Container  className="App">
      
      <Header/>
       
       <Home/>
       <Contact/>
       <Projects/>
       <Footer/>
    </Container >
  );
}


export default App;
