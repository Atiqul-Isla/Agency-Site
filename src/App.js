import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import About from "./components/About"
import Contact from "./components/Contact";
import Services from "./components/Services"
import Footer from "./components/Footer";


function App() {
  require('dotenv').config()
  
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Services/>
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
