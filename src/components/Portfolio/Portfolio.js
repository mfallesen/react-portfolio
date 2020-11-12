import React from 'react'

export default function Portfolio() {
    return (
        <main className="container container-bp container-shift-left page-main-content">
            <h1>Recent projects</h1>

            <hr />
            <section className="row">
                <section className="col-lg-6 ">

                    <div className="modal fade" id="project1" tabindex="-1" role="dialog"
                        aria-labelledby="project1modal" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Make My Date</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <a href="https://mfallesen.github.io/plannerly/"><img src="assets/images/project1img.png" alt="Make My Date website" className="img-fluid" /></a>
                                    <p> Random restaurant and event generator for simplifying your date night. Click the image to see the live site</p>
                                    <a href="https://github.com/mfallesen/plannerly">Explore on GitHub.</a>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="" data-toggle="modal" data-target="#project1"><img className="portfolio-images img-fluid" src="assets/images/project1img.png" alt="placeholder image" /></a>
                </section>

                <section className="col-lg-6 ">
                    <div className="modal fade" id="project2" tabindex="-1" role="dialog"
                        aria-labelledby="project2modal" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Make My Date</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <a href="https://mfallesen.github.io/password-generator/"><img src="assets/images/passwordgen.png" alt="password generator website" className="img-fluid" /></a>
                                    <p> Will generate a random password for you based on your specifications. Click the image to see the live site</p>
                                    <a href="https://github.com/mfallesen/password-generator">Explore on GitHub.</a>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="" data-toggle="modal" data-target="#project2"><img className="portfolio-images img-fluid" src="assets/images/passwordgen.png" alt="placeholder image" /></a>
                </section>

                <section className="col-lg-6 ">
                    <div className="modal fade" id="project3" tabindex="-1" role="dialog"
                        aria-labelledby="project3modal" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">Make My Date</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <a href="https://mfallesen.github.io/weather-api-homework/"><img src="assets/images/traveldash.png" alt="Make My Date website" className="img-fluid" /></a>
                                    <p> Random restaurant and event generator for simplifying your date night. Click the image to see the live site</p>
                                    <a href="https://github.com/mfallesen/weather-api-homework">Explore on GitHub.</a>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="" data-toggle="modal" data-target="#project3"><img className="portfolio-images img-fluid" src="assets/images/traveldash.png" alt="placeholder image" /></a>
                </section>

                <section className="col-lg-6 ">
                    <div className="modal fade" id="project4" tabindex="-1" role="dialog"
                        aria-labelledby="project4modal" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLongTitle">NEXT STEP</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <a href="https://next-step-employment-app.herokuapp.com/"><img src="assets/images/nextStep.png" alt="Next Step Job Board for The Homeless" className="img-fluid" /></a>
                                    <p>A theoretical solution to Assist getting Homeless people connected with companies and organizations that are hiring to help get people back on their feat. </p>
                                    <a href="https://github.com/mfallesen/project-2-job-posting">Explore on GitHub.</a>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="" data-toggle="modal" data-target="#project4"><img className="portfolio-images img-fluid" src="assets/images/nextStep.png" alt="Next Step" /></a>
                </section>

            </section>




        </main>
    )
}
