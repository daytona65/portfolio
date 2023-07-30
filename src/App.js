import React from 'react';
import Header from './components/sections/Header/header';
import Socials from './components/Socials/socials';
import Biography from './components/sections/Biography/biography';
import Work from './components/sections/Work/work';
import Skills from './components/sections/Skills/skills';



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
        <Biography />
        <Work />
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
