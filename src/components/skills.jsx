import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import "../skill.css";

// - Languages: Python, Javascript, Java, C++, R
// - Frameworks: React, Django, vis.js, d3.js
// - Tools: AWS, Docker, Concourse, Git, Unix
export default class Skills extends Component {
  render() {
    return (
        <div>
            <section id="colorlib-skills" className="js-fullheight" data-section="skills">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                            <span className="heading-meta">Expertise</span>
                            <h2 className="colorlib-heading animate-box">Technical Skills</h2>
                        </div>
                    </div>
                    <div className="outercontainer">
                        <Fade bottom>
                            <div className="container">
                                <div className="eachskill">
                                    <div class="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">
                                                <img
                                                    src={require("../images/language2.png")}
                                                    className="height2"
                                                    alt="language"
                                                />
                                                <div className="skilllabel">LANGUAGES</div>
                                            </div>
                                            <div class="flip-card-back">
                                                <img
                                                    src={require("../images/language2.png")}
                                                    className="height2"
                                                    alt="language"
                                                />
                                                <div className="skilllabel">LANGUAGES</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="skills">
                                <img src={require("../images/java.png")} className="height3" alt="java" />
                                <img src={require("../images/python.png")} className="height3" alt="python" />
                                <img src={require("../images/javascript.png")} className="height3" alt="javascript" />
                                <img src={require("../images/c++.png")} className="height3" alt="c++"/>
                                <img src={require("../images/sql.png")} className="height3" alt="sql"/>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom delay="200">
                            <div className="container">
                                <div className="eachskill">
                                    <div class="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">
                                                <img
                                                    src={require("../images/tool2.png")}
                                                    className="height2"
                                                    alt="tool"
                                                />
                                                <div className="skilllabel">TOOLS</div>
                                            </div>
                                            <div class="flip-card-back">
                                                <img src={require("../images/tool2.png")}
                                                    className="height2"
                                                    alt="framework"
                                                />
                                                <div className="skilllabel">TOOLS</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skills">
                                    <img src={require("../images/aws.png")} className="height3" alt="aws"/>
                                    <img src={require("../images/docker.png")} className="height3" alt="docker"/>
                                    <img src={require("../images/git.png")} className="height3" alt="git"/>
                                    <img src={require("../images/unix.png")} className="height3" alt="unix"/>
                                    <img src={require("../images/balsamiq.png")} className="height3" alt="balsamiq"/>
                                    <img src={require("../images/wireshark.png")} className="height3" alt="wireshark"/>
                                </div>
                            </div>
                        </Fade>
                        <Fade bottom delay="400">
                            <div className="container">
                                <div className="eachskill">
                                    <div class="flip-card">
                                        <div class="flip-card-inner">
                                            <div class="flip-card-front">
                                                <img
                                                    src={require("../images/framework2.png")}
                                                    className="height2"
                                                    alt="framework"
                                                />
                                                <div className="skilllabel">OTHERS</div>
                                            </div>
                                            <div class="flip-card-back">
                                                <img
                                                    src={require("../images/framework2.png")}
                                                    className="height2"
                                                    alt="framework"
                                                />
                                                <div className="skilllabel">OTHERS</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="skills">
                                    <img src={require("../images/react.png")} className="height3" alt="react" />
                                    <img src={require("../images/django.png")} className="height3" alt="django" />
                                    <img src={require("../images/bootstrap.png")} className="height3" alt="bootstrap" />
                                    <img src={require("../images/jquery.png")} className="height3" alt="jquery" />
                                    <img src={require("../images/nodejs.png")} className="height3" alt="nodejs" />
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
        </div>
    );
  }
}