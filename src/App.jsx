



import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Slider from './components/Slider';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import HomeDiv from './components/HomeDiv';
import Event from './components/Events/Event';
import SingleEvent from './components/Events/SingleEvent';
import UserProfile from './components/Profiles/UserProfile';
import OrgProfile from './components/Profiles/OrgProfile';


function App() {
  return (
    <Router>
      <NavBar />
      <Slider />
      <Switch>
        <Route path="/" exact component={HomeDiv} />
        <Route path="/about" component={AboutUs} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/event" component={Event} />
        <Route path="/singleEvent" component={SingleEvent} />
        <Route path="/userProfile" component={UserProfile} />
        <Route path="/orgProfile" component={OrgProfile} />
     
      </Switch>
      <Footer /> 
    </Router>
    
  );
}

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
// import './App.css';
// import NavBar from './components/NavBar';
// import Footer from './components/Footer';
// import Slider from './components/Slider';
// import SignUp from './components/SignUp';
// import LogIn from './components/LogIn';
// import ContactUs from './components/ContactUs';
// import AboutUs from './components/AboutUs';
// import HomeDiv from './components/HomeDiv';
// import Event from './components/Events/Event';
// import SingleEvent from './components/Events/SingleEvent';
// import UserProfile from './components/Profiles/UserProfile';
// import OrgProfile from './components/Profiles/OrgProfile';

// function App() {
//   const location = useLocation();
//   const hideNavAndFooter = location.pathname === '/userProfile' || location.pathname === '/orgProfile';

//   return (
//     <Router>
//       {!hideNavAndFooter && <NavBar />}
//       {!hideNavAndFooter && <Slider />} {/* Render the slider if not on UserProfile or OrgProfile pages */}
//       <Switch>
//         <Route path="/" exact component={HomeDiv} />
//         <Route path="/about" component={AboutUs} />
//         <Route path="/signup" component={SignUp} />
//         <Route path="/login" component={LogIn} />
//         <Route path="/contact" component={ContactUs} />
//         <Route path="/event" component={Event} />
//         <Route path="/singleEvent" component={SingleEvent} />
//         <Route path="/userProfile" component={UserProfile} />
//         <Route path="/orgProfile" component={OrgProfile} />
//       </Switch>
//       {!hideNavAndFooter && <Footer />}
//     </Router>
//   );
// }

// export default App;
