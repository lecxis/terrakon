import React from 'react';



const Footer = () => {
  return (
    <footer className="text-white ">

        <div className="mx-5 align-items-center">
            <div className="row   ">      
            <div className="col-12 col-md-3 mt-5">
                    <h5>Xxxx Consults</h5>
                    Redefining geotechnical engineering, foundation design, and groundwater exploration act
                </div>

                <div className="col-12 col-md-3 mt-5">
                    <h5>Services</h5>
                    <ul className="list-unstyled">
                      <li>Geotechnical Soil Investigation</li> 
                        <li>Super/sub-structure appraisal</li>
                        <li>Pile design and instalation</li>
                        <li>Pile load and pile integrity testing</li>
                    </ul>
                </div>

                <div className="col-12 col-md-3 mt-5">
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
                 <div className="col-12 col-md-3 mt-5">
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

                 <div className="col-12 col-md-3 mt-5 ">
                    <div className="tex">
                    <h5>Connect</h5>
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+">google<i className="fa fa-google-plus"></i></a><br />
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=">facebook<i className="fa fa-facebook"></i></a><br />
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/">linkedin<i className="fa fa-linkedin"></i></a><br />
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">Twitter<i className="fa fa-twitter"></i></a><br />
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/">youtube<i className="fa fa-youtube"></i></a><br />
                        <a className="btn btn-social-icon" href="mailto:">Email<i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>

                </div>
                </div>

      <p style={{ 
             backgroundImage: `url(${process.env.PUBLIC_URL + '/asset/images/drillers-rig.jpg'})`,
              backgroundRepeat: 'no-repeat',
        
           backgroundSize: 'cover',
           width:'100%'
              
        }} className="text-sm text-center">&copy; 
        {new Date().getFullYear()} XXX consult. All rights reserved.</p>

    </footer>
  );
};

export default Footer;