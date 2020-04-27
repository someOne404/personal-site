import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-briefcase3" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer Intern, FitKinect, LLC<span> 03/2020-Present</span></h2>
                        <ul>
                          <li>Implement and update features of the company’s web application using React and Redux, Node.js, and PostgreSQL.</li>
                          <li>Manage the application and set up a continuous deployment pipeline on AWS.</li>
                          <li>Perform software quality assurance testing and participate in code reviews.</li>
                        </ul>
                        </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-briefcase3" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer Intern, Squirrel AI Learning<span> 06/2019-08/2019</span></h2>
                        <ul>
                          <li>Supported the R&amp;D team to build an adaptive math tutoring platform targeting users who plan to participate in AMC 10/12.</li>
                          <li>Designed and developed the platform in the form of a desktop application using Balsamiq, JavaFX, and MySQL.</li>
                          <li>Hosted daily meeting and assigned tasks to members to ensure progress of the project using Jira.</li>
                        </ul>
                        </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-briefcase3" />
                      </div>
                      <div className="timeline-label">
                        <h2>Research Analyst Intern, Red Pulse<span> 06/2018-08/2018</span></h2>
                        <ul>
                          <li>Sourced, aggregated, and curated important daily developments in various sectors to provide insights on China’s capital markets for 50,000+ clients including JP Morgan and HSBC.</li>
                          <li>Performed qualitative analysis on market events in technology and consumer sectors to supply clients with up-to-date market insights via Red Pulse platform and 4 financial data providers (Bloomberg, S&amp;P Global, FactSet, Thomson Reuters).</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-briefcase3" />
                      </div>
                      <div className="timeline-label">
                        <h2>Content Tutor, University of Virginia<span> 10/2017-12/2018</span></h2>
                        <ul>
                          <li>Tutored 15 student athletes at UVA in the subjects of Computer Science, Economics, Mathematics, and Statistics.</li>
                          <li>Applied various teaching skills, such as creating problem sets and forming discussion groups to keep students engaged.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
