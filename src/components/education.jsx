import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section class="colorlib-education" data-section="education">
            <div class="colorlib-narrow-content">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span class="heading-meta">Education</span>
                        <h2 class="colorlib-heading animate-box">Education</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                        <div class="fancy-collapse-panel">
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingOne">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Bachelor Degree of Computer Science (with Distinction)
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                            <div class="panel-body">
                                                <div class="row">
                                                    <p><strong>University of Virginia &emsp; 08/2016-12/2019</strong></p>
                                                    <p><strong>GPA: 3.94/4.0</strong></p>
                                                    <p>
                                                        Relevant courses: Algorithms, Advanced Software Development, Software Development Methods (Java), Program&amp;Data Representation (C++), Introduction to Programming (Python), HCI in Software Development, Network Security
                                                    </p>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingTwo">
                                        <h4 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Bachelor Degree of Economics (with Distinction)
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <div class="panel-body">
                                            <div class="row">
                                                <p><strong>University of Virginia &emsp; 08/2016-12/2019</strong></p>
                                                <p><strong>GPA: 3.94/4.0</strong></p>
                                                <p>
                                                    Relevant courses: Microeconomics, Macroeconomics, Econometrics, Theory of Financial Markets, Behavioral Finance, International Trade: Theory &amp; Policy
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
      </div>
    )
  }
}
