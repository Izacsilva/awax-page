import React from "react";
//import './styles/css/main.css';
import './styles/sass/index.scss'
import { Header } from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import SectionDefault from "./components/SectionDefault.jsx";


function App() {
  
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <SectionDefault
       title="Service"
      description="services that we provide"
      >
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
        <h1>Hello!</h1>
      </SectionDefault>
    </>
  )
}

export default App
