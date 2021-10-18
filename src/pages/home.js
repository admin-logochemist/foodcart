import React from 'react';
import test1 from '../images/test1.jpg'
import test2 from '../images/test2.png'
import test3 from '../images/test3.jpg'
import Footer from './Footer';
import Tabs from './Tabs'
import "./home.css"
import { AiOutlineApple } from "react-icons/ai";
import { FcAndroidOs } from "react-icons/fc";
import SearchField from 'react-search-field';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import background from '../images/shadow1.png'
import download1 from '../images/download.png'
import download2 from '../images/download2.png'
import mockup from '../images/mockup2.png'
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";


const Home = () => {
    function onChange(e) {
        console.log(e.target.value);
    }

    function ImageClick() {

    }
    return (
        <div className="home">
            <header className="banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url(${background})`,
                backgroundPosition: "center center",
                backgroundRepeat: 'no-repeat',
                height: '100vh'
            }

            }>
                <div className="banner__contents">
                    <h1 className="banner__title font">
                        Locate <span className="red-one font">Food Trucks </span> & Restaurants
                        Anywhere!
                    </h1>
                    <div className="Searchbar">
                        <form action="/" method="get">
                            <label htmlFor="header-search">
                            </label>
                            <input className="inputss"
                                type="text"
                                id="header-search"
                                placeholder="         Search Location"
                                name="s"
                            />
                            <button className="btn-search" type="submit">Select Radius</button>
                            <button className="btn-search" type="submit">Search</button>
                        </form>
                    </div>
                    <h1 className="test__description"></h1>
                </div>


            </header>
            <section className="Discover-main">
                <div className="Discover">
                    <h1>Discover The
                        <span style={{ color: 'red' }}> Best Food In Town
                        </span></h1>
                </div>
                <br />
                <br />
                <Tabs />
                <br />
                <br />
            </section>
            <br />
            <br />
            <br />
            <br />
            {/* this is a section */}
            <section>
                <div className="Red-section">
                    <div className="Red-section-sub">
                        <div className="Download-the-App">
                            <h1 className="Heading-one font-poppins">Download <span style={{ color: 'white' }}> The App</span></h1>
                            <p style={{
                                fontSize: 15,
                                marginTop: 30
                            }}>It's all your fingertips-- the restaurants you love. Find the right food to suit your mood,<br /> and make the first last. Go ahead download us</p>
                            <img className="Android-apple-image" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = 'http://Playstore.com';
                            }} src={download1} alt="" />
                            <img className="Android-apple-image" onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href = 'http://Appstore.com'
                                }} src={download2} alt="" />
                        </div>
                        <div className="Mobile-image-sec">
                            <img className="mobile-image" src={mockup} />
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            {/* new section */}

            <section>
                <div className="asd">
                    <div style={{ textAlign: 'center', paddingTop: 15 }}>
                        <h1 className="white-color font-poppins">Customer's <span className="font-poppins" style={{ color: 'white' }}>Reviews</span></h1>
                        <div className="Simple-line"/>
                    </div>
                    <div className="testimonials">
                        <div className="white-thing">
                            <div class="green">
                                <img style={{ height: 100, width: 120, marginBottom: -10, borderRadius: '50%' }} src={test1} alt="" />
                                <h1 className="testimonial-name font-poppins">Emma Garry</h1>
                                <p className="font-poppins">Write a review for<span style={{ color: 'red' }}> Subway</span></p>
                                <p style={{
                                    textAlign: 'left'
                                }} className="font-poppins">I just wanted to say that I have fallen IN LOVE with your foods. I have sacrificed good wholesome food to “treat” myself and fulfill my hunger in the past, but i have found such satisfaction with awesome foods products.</p>
                                <span style={{ color: 'red' }}>05 Nov, 2021</span>
                            </div>
                        </div>
                        <div className="white-thing">
                            <div class="green">
                                <img style={{ height: 100, width: 120, marginBottom: -10, borderRadius: '50%' }} src={test2} alt="" />
                                <h1 className="testimonial-name font-poppins">Edy Labvnosky</h1>
                                <p className="font-poppins">Write a review for<span style={{ color: 'red' }}> SF Chickenbox</span></p>
                                <p style={{
                                    textAlign: 'left'
                                }} className="font-poppins">Food Port meal delivery service got me here. Their meals are great for people with busy schedule like me, and they’re healthy AND delicious. PS. I have sweet tooth and their desserts are to die for!.  Can’t wait to try more Awesome Foods!!</p>
                                <span style={{ color: 'red' }}>11 July, 2020</span>
                            </div>
                        </div>

                        <div className="white-thing">
                            <div class="green">
                                <img style={{ height: 100, width: 120, marginBottom: -10, borderRadius: '50%' }} src={test3} alt="" />
                                <h1 className="testimonial-name font-poppins">Isabella Kenyon</h1>
                                <p className="font-poppins">Write a review for<span style={{ color: 'red' }}> Olive Garden</span></p>
                                <p style={{
                                    textAlign: 'left',
                                    
                                }} className="font-poppins">Food Port is the perfect fit for me. I receive my vegetarian meals from Food Port, that are absolutely delicious, balanced and calorie controlled, just the way I like it. Can’t wait to try more Awesome Foods!!</p>
                                <span style={{ color: 'red', }}>19 Aug, 2021</span>
                            </div>
                        </div>
                    </div>
                    <div className="View-all-div">
                        <button className="View-All">View All</button>
                    </div>
                </div>
            </section>
            
                <Footer />
            
            <div className="copyright-home">
                <h1>Copyright 2020.All rights reserved.</h1>
                <SocialIcon style={{ height: 30 }} url="https://twitter.com/" />
				<SocialIcon style={{ height: 30 }} url="https://facebook.com/" />
				<SocialIcon style={{ height: 30 }} url="https://instagram.com/" />
            </div>
        </div>
    );
};
export default Home;
