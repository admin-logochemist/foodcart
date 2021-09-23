import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
// import Events from './pages/events';
import Contact from './pages/contact';
// import Teams from './pages/team';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/home' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/contact' component={Contact} />
	</Switch>
	</Router>
);
}

export default App;
