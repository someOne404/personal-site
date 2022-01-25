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
                      <div className="timeline-icon color-1">
                        <i className="icon-briefcase3" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer, Intuit Inc.<span> 03/2021-Present</span></h2>
                        <ul>
                          <li>Enabled users to refund from invoice page, smoothed the refunding experience, and reduced the possibility of transaction records mismatch.</li>
                          <li>Improved the usability of deposit list, which had 300K+ views over 3 months.</li>
                          <li>Enhanced QuickBooks Online’ s auto-reconciliation functionality, which impacted 200K merchants.</li>
                        </ul>
                        </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-briefcase3" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer, GoTab, Inc.<span> 06/2020-Present</span></h2>
                        <ul>
                          <li>Developed an ordering and payment platform used by more than 500 locations using Express, Marko.js, Redis, and PostgreSQL.</li>
                          <li>Implemented key features such as international text messaging, zero-dollar tabs, video embedding, and client-facing announcements, covering millions of users.</li>
                          <li>Integrated third-party APIs including Compeat, Bandwidth, 7Shifts, and MarginEdge to expand strategic partnerships of the company and leverage user experience.</li>
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
                        <h2>Software Engineer Intern, FitKinect, LLC<span> 03/2020-05/2020</span></h2>
                        <ul>
                          <li>Implemented and updated features of the company’s web application using React and Redux, Node.js, and PostgreSQL.</li>
                          <li>Managed the AWS cloud, deployed the app using EC2 and RDS services, and reduced the cost on cloud services by hundreds of dollars per month.</li>
                          <li>Performed software quality assurance testing and participate in code reviews.</li>
                        </ul>
                        </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
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
