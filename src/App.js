import logo from './logo.svg';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Container from 'react-bootstrap/Container';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/homeComponent';
import Contact from './components/contact';
import Projects from './components/projects';


function App() {
  return (
    <div className="App">
      
      <Header/>
       
       <Home/>
       
       
       <Footer/>
    </div >
  );
}


export default App;
