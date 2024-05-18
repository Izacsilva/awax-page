import React from "react";
//import './styles/css/main.css';
import './styles/sass/index.scss'
import { Header } from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import SectionDefault from "./components/SectionDefault.jsx";
import Services from "./components/Services.jsx";


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
       title="Services"
      description="services that we provide"
      corFundo="white"
      corTexto="black"
      >
        <Services></Services>        
      </SectionDefault>

    </>
  )
}

export default App
