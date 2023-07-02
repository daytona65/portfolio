import logo from './logo.svg';
import './App.css';
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function App() {
    const ref = useRef(null);

    const options = {
        smooth: true,
        multiplier: 2,
        offset: 0,
        onBefore: () => {
        }
        // onAfter: () => {}
    };
  return (
    <LocomotiveScrollProvider options={options} containerRef={ref}>
        <main data-scroll-container ref={ref}>
            <section className="intro" data-scroll data-scroll-speed="5" data-scroll-section>
                <h1>Introduction.</h1>
            </section>
            <section className="contents" data-scroll-section>
                <h1
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="20"
                >
                    Where I've worked
                </h1>
                <h1
                    data-scroll
                    data-scroll-direction="vertical"
                    data-scroll-speed="9" // Adds speed atop the current scrolling section
                >
                    What i have worked on
                </h1>
            </section>
            <section className="contents" id="stick" data-scroll-section>
                <h1
                    data-scroll
                    data-scroll-speed="5"
                    data-scroll-sticky // confines it to the current position on the screen
                    data-scroll-target="#stick" // confines it to the current scrolling section
                >
                    Hey my name is Sticky. Here are some of my projects
                </h1>
                <p>other contents</p>
            </section>
            <section className="footer" data-scroll-section>
                <h1
                    className="op-class"
                    data-scroll
                    data-scroll-class="fadeIn"
                    data-scroll-repeat="true"
                    data-scroll-speed="2"
                >
                    Let's get in touch!
                </h1>
            </section>
        </main>
    </LocomotiveScrollProvider>
  );
}
export default App;
