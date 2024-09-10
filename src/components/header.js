//import {NavLink} from 'react-router-dom';

export default function Header() {
    return (
        <header className="App-header">
           <nav className="menu">
            <div className="logo">
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson" width = "80" 
      />
      <p> TerraKon Consult</p>
      </div>
     
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
<div className="intro-body">
<p>Redefining soil Investigation and ground water exploration</p>
</div>
</header>
     
    )
  }