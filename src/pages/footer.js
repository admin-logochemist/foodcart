import React from 'react';
import { FaBeer } from 'react-icons/fa';

const Footer = () => {
  return (
    
    <div>
      <footer className="footerSetting">
        <div className='container'>
          <div className='row text-center text-sm-left'>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
             <h5 className="headings">ABOUT US</h5>
             <div className="footerlink">

              </div>
              <p className="mt-2">
              Are you hungry?<br/> Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then FoodPort is the right destination for you! FoodPort offers you a long and detailed list of the best restaurants and shops near you to help make your everyday easier.
                </p>
                {/* <i class="fa fa-facebook iconstyle" aria-hidden="true"></i>
                <i class="fa fa-twitter iconstyle"  aria-hidden="true"></i>
                <i class="fa fa-google-plus iconstyle" aria-hidden="true"></i>
                <i class="fa fa-linkedin iconstyle" aria-hidden="true"></i> */}           
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <h5 className="headings">ABOUT</h5>
              <div className="footerlink">

              </div>
              <ul>
                {/* <hr className="footercolor"/> */}
                {/* <li className="d-flex justify-content-start">
                <i class="fa fa-map-marker mx-2" aria-hidden="true"></i>
                
                  <a href='#'>Business</a>
                </li> */}
                
                <li >
                <i class="fa fa-phone mx-2" aria-hidden="true"></i>
                
                  <a href='#'>Popular Sites</a>
                </li>
                <hr className="footercolor"  />
                <li >
                <i class="fa fa-envelope-o mx-2" aria-hidden="true"></i>
                
                  <a href='#'>Donation</a>
                </li>
                <hr className="footercolor"/>
                <li >
                <i class="fa fa-globe mx-2" aria-hidden="true"></i>
                
                  <a href='#'>Daily Notification Concept</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <h5 className="headings">USEFUL LINKS</h5>
              <div className="footerlink">

              </div>
              <ul>
              
                <li className="d-flex justify-content-between">
                  <a href='#'> &gt; FAQ</a> 
                </li>
                <hr className="footercolor" />
                <li className="d-flex justify-content-between">
                  <a href='#'>&gt; Terms & Conditions</a>  
                </li>
                {/* <hr className="footercolor"/>
                <li className="d-flex justify-content-between">
                  <a href='#'>&gt;  Privacy policy</a> 
                </li> */}
                <hr className="footercolor" />
                <li className="d-flex justify-content-between">
                  <a href='#'>&gt; Contact Us</a> 
                </li>
                {/* <hr className="footercolor" /> */}
                <li className="d-flex justify-content-between">
                  
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
              <h5 className="headings">FOR BUSINESS</h5>
              <div className="footerlink">

              </div>
              <ul>
                <li>
                  <div className="d-flex ">
                  <div className="divlength mr-3">

                  </div>
                  <div>
                  <a href='#'>Clain your business page</a>{' '}<br/>
                  {/* <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i> */}
                  </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex ">
                  <div className="divlength mr-3">

                  </div>
                  <div>
                  <a href='#'>Sucess stories</a>{' '}<br/>
                  {/* <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i> */}
                  </div>
                  </div>
                </li>
                <li>
                  <div className="d-flex ">
                  <div className='divlength mr-3'>

                  </div>
                  <div>
                  <a href='#'>Business support</a>{' '}<br/>
                  {/* <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i> */}
                  </div>
                  </div>
                </li>

                <li>
                  <div className="d-flex ">
                  <div className="divlength mr-3">

                  </div>
                  <div>
                  <a href='#'>Advertise</a>{' '}<br/>
                  {/* <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i>
                  <i class="fa fa-star-o" aria-hidden="true"></i> */}
                  </div>
                  </div>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className=' footer-bootom' style={{ width: '98.85%' }}>
        <div className=''>
          <div className='row full-width'>
            <div className='col-md-12 full-width col-sm-12 col-xs-12 no-padding'>
              <p className='no-margin-bottom full-width text-center text-light bg-dark p-3'>
               @ Copyright FoodPort &copy; {new Date().getFullYear()}  All Rights Reserved
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;
