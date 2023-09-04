import React from "react";
import './skills.css'
import frontEnd from '../../assets/ui-design.png';
import backEnd from '../../assets/backend.png'
import mobDev from '../../assets/app-design.png'

const Skills = ()=>{
    return (
        <section id="skills">
            <span className="skillsTitle">Who am I 🧐⁉️</span>
            <span className="skillsDesc">
                I'm Ahmed ben Khlifa Jaidi,born in Siliena Tunisia in 2001. <br />
                I've obtained a computer science : software engeneering bachelor degree in 2023 from the High  Institut of Computer Science and Mathematics of Monastir.<br />
                I'm a skilled and passionate Web developper with experience in building web sites/applications .
            </span>
            <span className="skillsTitle">What I Do</span>
            <div className="skillsBars">
                <div className="skillBar">
                    <img className="skillBarImg" src={frontEnd} alt="FrEnd" />
                    <div className="skillBarText">
                        <h2>FrontEnd Web  Developpment </h2>
                        <p>I make a friendly user interface.</p>
                        <div className="badges">
                            <span className="badge">
                                HTML5
                            </span>
                            <span className="badge">
                                CSS3
                            </span>
                            <span className="badge">
                                JAVASCRIPT
                            </span>
                            <span className="badge">
                                REACT JS
                            </span>
                            <span className="badge">
                                BOOTSTRAP5
                            </span>
                        </div>
                    </div>
                </div>

                <div className="skillBar">
                    <img className="skillBarImg" src={backEnd} alt="BcEnd" />
                    <div className="skillBarText">
                        <h2>BackEnd Web Developpment</h2>
                        <p>I develop the server side from the web application.</p>
                        <div className="badges">
                            <span className="badge">
                                NODE JS
                            </span>
                            <span className="badge">
                                EXPRESS JS
                            </span>
                            <span className="badge">
                                SYMFONY 6
                            </span>
                            <span className="badge">
                                MONGO DB 
                            </span>
                            <span className="badge">
                                MYSQL
                            </span>
                        </div>
                    </div>
                </div>

                <div className="skillBar">
                    <img className="skillBarImg" src={mobDev} alt="Mob" />
                    <div className="skillBarText">
                        <h2>Mobile Developpment</h2>
                        <p>I develop Android and Ios mobile apps.</p>
                        <div className="badges">
                            <span className="badge">
                               Flutter
                            </span>
                            <span className="badge">
                               KOTLIN
                            </span>
                            <span className="badge">
                               FIREBASE
                            </span>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}


export default Skills ;