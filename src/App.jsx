import React from "react";
//import './styles/css/main.css';
import './styles/sass/index.scss'
import { Header } from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import SectionDefault from "./components/SectionDefault.jsx";
import Services from "./components/Services.jsx";
import OurProjects from "./components/OurProjects.jsx";


function App() {
  
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <SectionDefault
       title="Services"
      description="services that we provide"
      corFundo="black"
      corTexto="white"
      >
        <Services></Services>        
      </SectionDefault>
      <SectionDefault
       title="Out projects"
      description="what we create"
      corFundo="white"
      corTexto="black"
      >
        <OurProjects></OurProjects>
      </SectionDefault>

    </>
  )
}

export default App
