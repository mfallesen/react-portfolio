import React from 'react'

export default function Contact() {
    return (
        <main className="container  container-shift-left">
            <section className="row">
                <form className="page-main-content col-lg-9 col-md-9 col-sm-9">
                    <h2>Contact</h2>
                    <hr />
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Name</label>
                        <input type="email" className="form-control" placeholder="John Doe" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" className="form-control" placeholder="name@example.com" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea className="form-control" rows="2" placeholder="Say hello!"></textarea>
                    </div>
                    <button type="button" className="btn btn-secondary btn-lg btn-color">Say Hi!</button>
                </form>
            </section>
        </main>
    )
}
