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
						{/* 
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div>
						*/}  
					</div>
				</section>
      </div>
    )
  }
}
