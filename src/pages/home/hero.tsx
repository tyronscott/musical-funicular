import { Link } from "react-scroll";
import "./hero.css";

function Hero() {
    return <>

        <div id="hero-container">
            <div id="hero-background"></div>
            <div id="hero-content">

                {/* nav, home, about, pages, services, contact  using html5 tags*/}
                <nav id="hero-nav">
                    <a className="selected" href="#home">Home</a>
                    <Link to="about" smooth={true} duration={1000}>About</Link>
                    <Link to="practice-areas" smooth={true} duration={1000}>Services</Link>

                    <Link to="footer" smooth={true} duration={1000}>Contact</Link>
                </nav>


                <p id="main-title">We <span style={{ color: "#82298b" }}> Fight</span> For The <span style={{ color: "#a45a9c" }}> Right</span></p>
                <p id="hero-description"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quaerat. Nisi doloribus libero optio, quod voluptatem error quo explicabo expedita inventore facere debitis, vero dolor eius veniam sed eligendi odio?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis corrupti saepe in at exercitationem voluptate reiciendis commodi sit, quam earum error, distinctio quibusdam vero assumenda consequuntur laudantium aliquid voluptates dignissimos?
                </p>

                <button className="hero-button">CONTACT US</button>
            </div>
        </div>

        {/* <div className="container">
            <div id="target">
                This is the div
             </div>
            <div id="centerDiv">
                This is supposed to be horizontally centered <em><br />to the div element above</em>
            </div>
        </div> */}

    </>
}

export default Hero;