import Contact from "./Contact";
import Agriclture from "./Agriculture";
import Cards from "./Cards";
import Education from "./Education";
import Footer from "./Footer";
import Hero from "./Hero";
import Job from "./Job";
import Navbar from "./Navbar";
import About from "./about";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
          <div className="App">
            <Navbar /> 
            <Switch>

                <Route exact path='/'>
                  <Hero />
                </Route>

                <Route path='/resources'>
                  <Cards />
                </Route>
                
                <Route path='/agriculture'>
                  <Agriclture />
                </Route>

                <Route path='/education'>
                  <Education />
                </Route>
                
                <Route path='/fuzu'>
                  <Job />
                </Route>

                <Route path='/about'>
                  <About />
                </Route>

                <Route path="/contact">
                  <Contact />
                </Route>

            </Switch>
            <Footer />
          </div>
    </Router>
  );
}

export default App;
