
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 first-col">
                        <div className="logo">
                            <img src="musical-funicular/LOGO.png"
                                width={200}
                                height={200}
                                alt="Granger Law" />
                            <h2>Granger Law</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida.</p>
                    </div>
                    <div className="col-md-4">
                        <h4>Navigation</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Pages</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Contact Us</h4>
                        <ul>
                            <li>0912 345 6789</li>
                            <li>Cooper@Example.com</li>
                        </ul>
                        <div className="social-icons">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;