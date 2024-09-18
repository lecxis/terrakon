//import {NavLink} from 'react-router-dom';
//http://localhost:3000/terrakon "http://localhost:3000/terrakon/asset/images/ship-rig.jpg"/

//import background from "http://localhost:3000/terrakon/asset/images/ship-rig.jpg";

export default function Header() {
    return (
        <header className="App-header"  style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL + '/asset/images/drillers-rig.jpg'})`,
          backgroundRepeat: 'no-repeat',
          height: '700px'
          
          }}>
           <nav className="menu" >
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