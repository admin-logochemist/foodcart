import React from 'react';
import imagebackground from '../images/bgimage.png'
import mobileimage from '../images/mobile.png'

const Home = () => {
return (
    <div className="home"> 
	<div
	style={{
		display: 'flex',
        backgroundImage: `url(${imagebackground})`,
        justifyContent: 'center',
        backgroundSize: 'cover',
		height: '92vh',
	}}
	>
        <div style={{  }}>
            <div style={{  }}>
	<h1 style={{ color: 'white', fontSize: 90, textAlign: 'center' }}>
    <span className="font-link"> Locate Food trucks </span><br/>
    <span className="font-link" style={{ color: 'red' }}> & restaurants anywhere!
    </span></h1>
    <div style={{  }}>
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Area / Zip Code"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    </div>
	</div>
    </div>
    </div>
   <section>
       <div style={{ textAlign: 'center', fontSize: 30 }}>
           <h1 className="font-link">Discover the
           <span className="font-link" style={{ color: 'red' }}> best food in town 
           </span></h1>
       </div>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
           <button style={{ fontSize: 20, backgroundColor: 'red', borderRadius: 10, width: 200, border: 'black' }}> Food Trucks</button>
           <button style={{ fontSize: 20, backgroundColor: 'red', borderRadius: 10, width: 200, border: 'black' }}> Big Chain</button>
           <button style={{ fontSize: 20, backgroundColor: 'red', borderRadius: 10, width: 200, border: 'black' }}> Restaurants</button>
           
       </div>
         <div style={{ textAlign: 'center', color: 'grey', fontSize: 10 }}>
               <h1>No Food Trucks are found at this location. Please try at different location</h1>
           </div>
   </section>
   <div style={{ backgroundColor: 'lightgray' }}>
   <div className="font-link1" style={{ padding: 100 }}>
       <h1>Download <span style={{ color: 'red' }}>the App</span></h1>
       <p>It's all your fingertips-- the restaurants you love. <br/>Find the right food to suit your mood, and make<br/> the first last. Go ahead download us</p>
    <div>
    
        <div style={{ marginLeft: '50%' }}>
             <img style={{ }} src={mobileimage} alt=""/>
        </div>
        </div>
        </div>    
    </div>

     {/* new section */}

    <section>
        <div style={{ textAlign: 'center' }}>
            <h1 className="font-link1">Customer's <span className="font-link1" style={{ color: 'red' }}>Reviews</span></h1>
        </div>
        <div>
        <div style={{ height: 350,backgroundColor: 'black', width: 100, padding: 100 }}></div>
        <div style={{}}></div>
        <div style={{}}></div>
        </div>
    </section>



   </div>

);
};

export default Home;
