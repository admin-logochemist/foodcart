import React from 'react';
import imagebackground from '../images/bgimage.png'
import mobileimage from '../images/mobile.png'
import test1 from '../images/test1.png'
import Footer from './footer';
import Tabs from './Tabs'
import "./home.css"

const Home = () => {
return (
    <div className="home">
	<div
	style={{
		display: 'flex',
        backgroundImage: `url(${imagebackground})`,
        backgroundBlendMode: 'soft-light',
        justifyContent: 'center',
        backgroundSize: 'cover',
		height: '94vh',
	}}
	>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ }}>

	<h1 style={{ color: 'white', fontSize: 50, textAlign: 'center' }}>
    <span className="font-link"> Locate Food trucks & restaurants</span><br/>
    <span className="font-link" style={{ color: 'red' }}>  anywhere!
    </span></h1>
    <p style={{color: 'white', fontSize: 20, textAlign: 'center' }}>Discover the best food in town</p>
    <div style={{}}>
    <form className="form-search-bar" action="/" method="get">
    <div style={{ padding: 20 }}>
        <label htmlFor="header-search">
            <span style={{ color: 'black', fontWeight: 'bold' }}></span>
        </label>
        
        <input className="Imput-Search"
            type="text"
            id="header-search"
            placeholder="Search Area / Zip Code"
            name="s" 
        />
        <button style={{ width: 100, backgroundColor: 'black', color: 'white', height: 60, borderRadius: 10 }} type="submit">Search</button>
        </div>
    </form>
    </div>
	</div>
    </div>
    </div>
    <br/>
    <br/>
    <br/>
   <section>
       <div style={{ textAlign: 'center', fontSize: 30 }}>
           <h1>Discover the
           <span style={{ color: 'red' }}> best food in town 
           </span></h1>
       </div>
       <br/>
       <Tabs/>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}> 
       </div>
       <br/>
       <br/>
         <div style={{ display:'flex',alignItems:'center',flexDirection:'row',padding:'40px' }}>
         
           </div>
   </section>
    <br/>
    <br/>
    <br/>
    <br/>
   {/* this is a section */}
        <section>
           <div style={{ backgroundColor: 'red' }}>
               <div style={{display:'flex', alignItems:'center' ,justifyContent:'space-evenly' ,flexDirection:'row', flexWrap: 'wrap'}}>
                   
                   <div className="Download-the-App">
                   <h1 style={{ color: 'black' }}>Download <span style={{ color: 'white' }}> the App</span></h1>
                   <p>It's all your fingertips-- the restaurants you love. Find the<br/> right food to suit your mood, and make the first last. Go <br/>ahead download us</p>
                   <button className="btn-mobile">Download on the App Store</button>
                   <button className="btn-mobile">Download on the Play Store</button>
                  
                   </div>
                   <img className="mobile-image" src={mobileimage}/>
               </div>
             
           </div>
        </section>

     {/* new section */}

    <section>
        <div style={{ backgroundColor: '#f0f2f5'}}>
        <div style={{ textAlign: 'center', paddingTop: 15 }}>
            <h1 className="font-link1">Customer's <span className="font-link1" style={{ color: 'red' }}>Reviews</span></h1>
        </div>
        <div className="testimonials">
            <div className="white-thing"> 
            <div class="green">
            <img style={{ height: 100, width: 120, marginBottom: -10 }} src={test1} alt=""/>
                <h1 className="testimonial-name" className="font-link1">Edy Labvnosky</h1>
                <p className="font-link1">Write a review for<span style={{ color: 'red' }}> SF Chickenbox</span></p>
                <p className="font-link1">The following review reflect my takeout experence DURING the sheiter-in-piace order currently in effect ** Somehow I know I'd find an excuse to try the trie chicken. I just wouldn't have beileved it would be a pandemic that got me in hare with my cloth face mask and disposable gioves</p>
                <span style={{ color: 'red' }}>05 Sep, 2020</span>
            </div>
            </div>

            <div className="white-thing"> 
            <div class="green">
            <img style={{ height: 100, width: 120, marginBottom: -10 }} src={test1} alt=""/>
            <h1 className="testimonial-name" className="font-link1">Edy Labvnosky</h1>
                <p className="font-link1">Write a review for<span style={{ color: 'red' }}> SF Chickenbox</span></p>
                <p className="font-link1">The following review reflect my takeout experence DURING the sheiter-in-piace order currently in effect ** Somehow I know I'd find an excuse to try the trie chicken. I just wouldn't have beileved it would be a pandemic that got me in hare with my cloth face mask and disposable gioves</p>
                <span style={{ color: 'red' }}>05 Sep, 2020</span>
            </div>
            </div>

            <div className="white-thing"> 
            <div class="green">
            <img style={{ height: 100, width: 120, marginBottom: -10 }} src={test1} alt=""/>
            <h1 className="testimonial-name" className="font-link1">Edy Labvnosky</h1>
                <p className="font-link1">Write a review for<span style={{ color: 'red' }}> SF Chickenbox</span></p>
                <p className="font-link1">The following review reflect my takeout experence DURING the sheiter-in-piace order currently in effect ** Somehow I know I'd find an excuse to try the trie chicken. I just wouldn't have beileved it would be a pandemic that got me in hare with my cloth face mask and disposable gioves</p>
                <span style={{ color: 'red' }}>05 Sep, 2020</span>
            </div>
            </div>


        </div>
        </div>
    </section>

<Footer/>

   </div>

);
};

export default Home;
