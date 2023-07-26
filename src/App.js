import React from 'react';
import Header from './components/sections/Header/header';
import Socials from './components/sections/Header/socials';
import Nav from './components/Navigation/nav';
import Landing from './components/Landing (Header)/landing';
import About from './components/sections/About/about';
import Work from './components/sections/Work/work';
import Skills from './components/sections/Skills/skills';
import Projects from './components/sections/Projects/projects';
import Footer from './components/Footer/footer';

import './App.css';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function App() {
    const ref = useRef(null);

    const options = {
        smooth: true,
        smartphone: {
            smooth: true,
        },
    };

  return (
    <>
        <Header />
        <Socials/>
        <Work />
        {/* <About /> */}
    </>
    
    // <LocomotiveScrollProvider options={options} containerRef={ref}>
    //     <main data-scroll-container ref={ref}>
            
    //         {/* <Landing /> */}
    //         {/* <Introduction /> */}
    //         {/* <Work /> */}
    //         {/* <Skills /> */}
    //         {/* <Projects /> */}
    //         {/* <Contact />   */}

    //         <Footer />            
             
    //     </main>
    // </LocomotiveScrollProvider>
  );
}
export default App;
