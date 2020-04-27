import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/covid19-tracker.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://covid19-tracker-murex.now.sh/">Covid-19 Tracker</a></h3>
											<span>A mapping app which tracks the impact Covid-19 has had on the world using coronavirus-tracker-api</span>
											<p className="icon">
												<span><a href="https://github.com/someOne404/covid19-tracker"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/videos.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://github.com/someOne404/react-videos">Video App</a></h3>
											<span>Video App Using Youtube API</span>
											<p className="icon">
												<span><a href="https://github.com/someOne404/react-videos"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/Streamy.png)'}}>
									<div className="desc">
										<div className="con">
										<h3><a href="https://github.com/someOne404/streamy">Streamy</a></h3>
											<span>A Live-Streaming App through RTMP Server</span>
											<p className="icon">
												<span><a href="https://github.com/someOne404/streamy"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/lucky13b.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://lucky-13.herokuapp.com/home/">Skillmatcher</a></h3>
											<span>Students Social Platform</span>
											<p className="icon">
												<span><a href="https://github.com/someOne404/skillmatcher"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/restaurant.png)'}}>
									<div className="desc">
										<div className="con">
										<h3><a href="https://github.com/someOne404/react2">Ristorante Con Fusion</a></h3>
											<span>Restaurant Website</span>
											<p className="icon">
												<span><a href="https://github.com/someOne404/react2"><i className="icon-github" /></a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/financeapp.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://devpost.com/software/finance-tracker-1m0ats">Finance Tracker</a></h3>
											<span>Finance Tracking App</span>
											<p className="icon">
												<span><a href="https://github.com/someOne404/FinanceApp"><i className="icon-github" /></a></span>
											</p>
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
