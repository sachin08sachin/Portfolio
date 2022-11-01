
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import { About } from './Components/About/About';
import { Work } from './Components/Work/Work';
import { Skill } from './Components/Skill/Skill';
import { Contact } from './Components/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
            <ScrollToTop smooth='true' style={{height:"40px",width:"40px",backgroundColor:"orange",borderRadius:"50%",
boxShadow:" rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",

}} />
      <Navbar />
 
      <Home />

      <About />
      <Work />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
