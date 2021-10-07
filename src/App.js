import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/SignIn';
import AddResturant from './pages/AddResturant';
import AddFoodCart from './pages/AddFoodCart';
import AddFood from './pages/AddFood';
import Restaurantbox from './pages/restaurant-box';
import Dashboard from './Dashboard';
import Checkout from './pages/Checkout';
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Stripe from './pages/Stripe';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
function App() {
    const promise=loadStripe('pk_test_51J5C8JLwMYFuVwcJpbQ11WOXgTvDiN8VHT0KkDG1R3OpRxGAZSmB072QxdrPVcKVeiebK9aOt10IHvOvfeUpfkoP00OqXNDT48')
 const public_URL='food.demoapp-lc.com'
return (
    <Router basename={process.env.public_URL}>
    <Navbar />
    <Switch>
        <Route exact path='/' exact component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/SignUp' component={SignUp} />
        <Route exact path='/SignIn' component={SignIn} />
        <Route  path='/addResturant' component={AddResturant} />
        <Route  path='/addfoodcart/' component={AddFoodCart} />
        <Route  path='/addfood' component={AddFood} />
        <Route exact path='/restaurantbox' component={Restaurantbox}/>
        <Route  path='/dashboard' component={Dashboard}/>
        <Route path='/checkout' component={Checkout}/>
        
        <Route path='/Stripe'>
       
        <Elements stripe={promise}>
            <Stripe/>
        </Elements>
        </Route>
    </Switch>
    </Router>
);
}

export default App;
