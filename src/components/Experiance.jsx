import { BsPatchCheckFill } from "react-icons/bs";
import './Experiance.css';
const Experiance = () => {
    return (
        <section id="experiance">
            <h5 id="experiance">What's Skills I Have </h5>
            <h2>My Experiance</h2>

            <div className="container experiance_container">
                <div className="experiance_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experiance_content">
                        <article className="experiance_details">
                            <BsPatchCheckFill className="experiance_details-icon"></BsPatchCheckFill>
                            <div>
                            <h4>HTML</h4>
                            <small className="text-light">Experianced</small>
                            </div>
                        </article>
                        <article className="experiance_details">
                            <BsPatchCheckFill className="experiance_details-icon"></BsPatchCheckFill>
                            <div>
                            <h4>CSS</h4>
                            <small className="text-light">Experianced</small>
                            </div>
                        </article>
                        <article className="experiance_details">
                            <BsPatchCheckFill className="experiance_details-icon"></BsPatchCheckFill>
                            <div>
                            <h4>JavaScript</h4>
                            <small className="text-light">Experianced</small>
                            </div>
                        </article>
                        <article className="experiance_details">
                            <BsPatchCheckFill className="experiance_details-icon"></BsPatchCheckFill>
                            <div>
                            <h4>ReactJs</h4>
                            <small className="text-light">Experianced</small>
                            </div>
                        </article>
                        <article className="experiance_details">
                            <BsPatchCheckFill className="experiance_details-icon"></BsPatchCheckFill>
                            <div>
                            <h4>Bootstrap</h4>
                            <small className="text-light">Experianced</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experiance_backend">
                    <h3>Backend Development</h3>
                    <div className="experiance_content">
                        <article className="experiance_details">
                            <BsPatchCheckFill className="experiance_details-icon"></BsPatchCheckFill>
                            <div>
                            <h4>Node JS</h4>
                            <small className="text-light">Experianced</small>
                            </div>
                        </article>
                        <article className="experiance_details">
                            <BsPatchCheckFill className="experiance_details-icon"></BsPatchCheckFill>
                            <div>
                            <h4>MongoDB</h4>
                            <small className="text-light">Experianced</small>
                            </div>
                        </article>
                        <article className="experiance_details">
                            <BsPatchCheckFill className="experiance_details-icon"></BsPatchCheckFill>
                            <div>
                            <h4>SQL</h4>
                            <small className="text-light">Experianced</small>
                            </div>
                        </article>
                        <article className="experiance_details">
                            <BsPatchCheckFill className="experiance_details-icon"></BsPatchCheckFill>
                            <div>
                            <h4>SQL Server</h4>
                            <small className="text-light">Experianced</small>
                            </div>
                        </article>
                        <article className="experiance_details">
                            <BsPatchCheckFill className="experiance_details-icon"></BsPatchCheckFill>
                            <div>
                            <h4>Express Js</h4>
                            <small className="text-light">Experianced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experiance;