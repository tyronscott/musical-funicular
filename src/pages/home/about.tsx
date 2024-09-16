import "./about.css"

const services = [
    { name: 'Insurance claims', icon: 'gavel' },
    { name: 'Continued support', icon: 'gavel' },
    { name: 'Business consulting', icon: 'gavel' },
    { name: 'Contract analysis', icon: 'gavel' },
    { name: 'Clear communication', icon: 'gavel' },
];

function About() {
    return <>

        <div id="about-container">
            {/* list */}
            <div id="about-list">
                <div className="about-item">
                    <span id="logo" className="material-symbols-outlined">
                        check
                    </span>
                    <h2>Legal</h2>
                    <p>Government approved</p>
                </div>

                <hr />

                <div className="about-item">
                    <span id="logo" className="material-symbols-outlined">
                        award_star
                    </span>
                    <h2>Attorneys</h2>
                    <p>Expert Attorneys</p>
                </div>

                <hr />

                <div className="about-item">
                    <span id="logo" className="material-symbols-outlined">
                        thumb_up
                    </span>
                    <h2>Success</h2>
                    <p>99.99% Cases Won</p>
                </div>

                <hr />

                <div className="about-item">
                    <span id="logo" className="material-symbols-outlined">
                        volunteer_activism
                    </span>
                    <h2>Support</h2>
                    <p>Quick Support</p>
                </div>
            </div>


            <LegalJourney services={services} />
        </div>



    </>
}


interface Service {
    name: string;
    icon: string;
}

interface LegalJourneyProps {
    services: Service[];
}

const LegalJourney: React.FC<LegalJourneyProps> = ({ services }) => {
    return (
        <div className="legal-journey-container">
            <div className="left-section">
                <img src="https://primary.jwwb.nl/unsplash/hjwKMkehBco.jpg?enable-io=true&enable=upscale&crop=1280%2C1280%2Cx320%2Cy0%2C" alt="Fountain pen on paper" />
            </div>
            <div className="right-section">
                <h1>From tradition to modernity: A legal journey</h1>
                <p>The legal journey of humanity is a testament to the evolution of societies, cultures, and governance systems. From ancient traditions to modern legal frameworks.</p>
                <ul className="services-list">
                    {services.map((service, index) => (
                        <li key={index}>
                            <span id="logo2" className="material-symbols-outlined">{service.icon}</span>
                            <span>{service.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


export default About;