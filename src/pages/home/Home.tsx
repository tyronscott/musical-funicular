import About from "./about";
import Footer from "./Footer"
import Hero from "./hero";
import PracticeAreas from "./PracticeAreas"
import Team from "./Team"

import { Element } from 'react-scroll';


function Home() {
    return (
        <>

            <Element name="home">
                <Hero />
            </Element>

            <Element name="about">
                <About />
            </Element>

            <Element name="practice-areas">
                <PracticeAreas />
            </Element>

            <Element name="team">
                <Team />
            </Element>

            <Element name="footer">
                <Footer />
            </Element>
        </>
    )
}

export default Home