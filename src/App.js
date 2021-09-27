import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/SignIn';
import AddResturant from './pages/AddResturant';
import AddFoodCart from './pages/AddFoodCart';
import AddFood from './pages/AddFood';
import Restaurantbox from './pages/restaurant-box';
function App() {
return (
    <Router>
    <Navbar />
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/addResturant' component={AddResturant} />
        <Route path='/addfoodcart' component={AddFoodCart} />
        <Route path='/addfood' component={AddFood} />
        <Route path='/restaurantbox' component={Restaurantbox}/>
    </Switch>
    </Router>
);
}

export default App;
