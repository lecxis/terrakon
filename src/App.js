import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/homeComponent';


function App() {
  return (
    <div className="App">
      
      <Header/>
       
       <Home/>
       <Footer/>
    </div>
  );
}


export default App;
