import React from "react";
import "./experience.css";
import html from "../../assets/html.png";
const Experience = () => {
    return (
        <section id="experience">
            <h5>My Skills</h5>
            <h2>My Experience</h2>
            {/* TODO:Refactor and Create components with prop Title and skill level */}
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <h4>HTML</h4>
                            <small className="text-light">Average</small>
                        </article>
                        <article className="experience__details">
                            <h4>CSS</h4>
                            <small className="text-light">Average</small>
                        </article>
                        <article className="experience__details">
                            <h4>JavaScript</h4>
                            <small className="text-light">Average</small>
                        </article>
                        <article className="experience__details">
                        <h4>React</h4>
                        <small className="text-light">Average</small>
                        </article>
                        <article className="experience__details">
                            <h4>Bootstrap</h4>
                            <small className="text-light">Average</small>
                        </article>
                        <article className="experience__details">
                            <h4>Tailwind</h4>
                            <small className="text-light">Average</small>
                        </article>
                   
                    <article className="experience__details">
                        <h4>Adope Photoshop</h4>
                        <small className="text-light">Average</small>
                    </article>
                </div>
                </div>
{/**************************** END OF FRONTEND ************************************/}
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <h4>PHP</h4>
                            <small className="text-light">Average</small>
                        </article>
                        <article className="experience__details">
                            <h4>Laravel</h4>
                            <small className="text-light">Average</small>
                        </article>
                        <article className="experience__details">
                            <h4>MYSQL</h4>
                            <small className="text-light">Average</small>
                        </article>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Experience;
