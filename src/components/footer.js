import React from 'react';



const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center">

        <div className="container ">
            <div className="row justify-content-center py-3 ">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                      <li>Home</li> 
                        <li>About Us</li>
                        <li>Menu</li>
                       {/*<li><Link to ='/home'>Home</Link></li> 
                        <li><Link to='/aboutus'>About Us</Link></li>
                        <li><Link to='/menu'>Menu</Link></li>
                        <li><Link to='/contactus'>Contact Us</Link></li>*/}
                    </ul>
                </div>
                 <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              XXXX consult avenue, <br />
		              Ikeja, Lagos state,<br />
		              Nigeria<br />
		              <i className="fa fa-phone fa-lg"></i>: +234 8161 83 1481<br />
		              <i className="fa fa-fax fa-lg"></i>: +234 816 183 1481<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:oloniluaolalekan@gmail.com">
                         info@xxxconsult.com</a>
                    </address>
                </div>

                 <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+">google<i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>

                </div>
                </div>

      <p style={{ 
             backgroundImage: `url(${process.env.PUBLIC_URL + '/asset/images/drillers-rig.jpg'})`,
              backgroundRepeat: 'no-repeat',
        
           backgroundSize: 'cover',
           width:'100%'
              
        }} className="text-sm">&copy; 
        {new Date().getFullYear()} XXX consult. All rights reserved.</p>

    </footer>
  );
};

export default Footer;