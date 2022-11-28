import React from "react"
import Nav from "./Components/Nav/nav";
import Home from "./Components/Home/home"
import About from './Components/About/about'
import Services from "./Components/Services/services";
import Gallery from "./Components/Gallery/gallery";
import Contact from "./Components/Contact/contact";
function App() {


  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <Services/>
      <Gallery/>
      <Contact/>
    </div>
  );
}
export default App;
