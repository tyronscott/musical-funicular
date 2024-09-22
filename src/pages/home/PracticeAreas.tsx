
import './PracticeAreas.css';


const PracticeAreas: React.FC = () => {
    return <div className="practice-areas-container">

        <div className="practice-areas-header">
            <h1 id="services-text"> SERVICES</h1>
            <h1>Our Practice Areas</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida.
            </p>
        </div>
        <div id="practice-areas-section">

            <input type="radio" name="slider" id="item-1" />
            <input type="radio" name="slider" id="item-2" defaultChecked />
            <input type="radio" name="slider" id="item-3" />


            <div className="practice-areas-cards">
                <label htmlFor="item-1" className="card" id="item-container-1">
                    <div className="card-item">
                        <div id="card-item-logo">
                            <span id="logo" className="material-symbols-outlined">
                                gavel
                            </span>
                        </div>
                        <h1>Healthcare Law</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga, aspernatur dignissimos sint omnis sit.</p>
                    </div>

                </label>

                <label className="card" htmlFor="item-2" id="item-container-2">
                    <div className="card-item">
                        <div id="card-item-logo">
                            <span id="logo" className="material-symbols-outlined">
                                gavel
                            </span>
                        </div>
                        <h1>Business Law</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga, aspernatur dignissimos sint omnis sit.</p>
                    </div>
                </label>
                <label className="card" htmlFor="item-3" id="item-container-3">
                    <div className="card-item">
                        <div id="card-item-logo">
                            <span id="logo" className="material-symbols-outlined">
                                gavel
                            </span>
                        </div>
                        <h1>Corporate Law</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fuga, aspernatur dignissimos sint omnis sit.</p>
                    </div>
                </label>
            </div>

        </div>
    </div>
};

export default PracticeAreas;
