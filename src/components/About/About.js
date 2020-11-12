import React from 'react'
import './About.css'

export default function About() {
    return (
        <div>
            <main className="row">
                <section className="container page-main-content container-shift-left col-lg-8 col-md-8">
                    <section >
                        <h1>About Me</h1>
                    </section>
                    <hr />
                    <section className="row">
                        <article className="col-lg">
                            <img id="profilePicture" src={`${process.env.PUBLIC_URL}/assets/images/about-me.png`} alt="Mikael Fallesen"
                                className="float-left responsive" />
                            <p>I am an army combat veteran with two years professional experience working on building websites and web
                            applications for individuals and companies. I have a passion for learning new things and technologies but at
                            the same time am not afraid to go back to basics when necessary. In my spare time I enjoy being outdoors
                            with my family, studying literature, working out, or scale model making.
          </p>
                            <p>Working with technology has always been a passion for me and more so when I'm able to get underneath the hood
                            of a project. I'm always up for a new challenge or task and I adapt easily to work environments regardless of
                            the situation. As a veteran I understand the importance and effectiveness of timely communication and
            execution to not only deliver results but to also surpass expectations.</p>
                            <a href={`${process.env.PUBLIC_URL}assets/images/resume.pdf`}>Would you like to know more?</a>
                        </article>
                    </section>
                </section>
            </main>
        </div>
    )
}
