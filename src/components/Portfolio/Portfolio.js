import React, { useState } from 'react'
import { Button, Modal, Image, Row, Col, Container } from 'react-bootstrap'

export default function Portfolio() {
    // Modal 1
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Modal 2
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    // Modal 3
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    // Modal 4
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    return (
            <Container>
            <h1>Recent projects</h1>

            <hr />
                <Row>
                    <Col lg="6">
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Make My Date</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <a href="https://mfallesen.github.io/plannerly/"><img src="assets/images/project1img.png" alt="Make My Date website" className="img-fluid" /></a>
                                <p> Random restaurant and event generator for simplifying your date night. Click the image to see the live site</p>
                                <a href="https://github.com/mfallesen/plannerly">Explore on GitHub.</a>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Image src={`${process.env.PUBLIC_URL}/assets/images/project1img.png`} onClick={handleShow} thumbnail={true}></Image>

                    </Col>
                    <Col lg="6">
                    <Modal show={show1} onHide={handleClose1}>
                            <Modal.Header closeButton>
                                <Modal.Title>Make My Date</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <a href="https://mfallesen.github.io/password-generator/"><img src="assets/images/passwordgen.png" alt="password generator website" className="img-fluid" /></a>
                                        <p> Will generate a random password for you based on your specifications. Click the image to see the live site</p>
                                        <a href="https://github.com/mfallesen/password-generator">Explore on GitHub.</a>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose1}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Image src={`${process.env.PUBLIC_URL}/assets/images/passwordgen.png`} onClick={handleShow1} thumbnail={true}></Image>
                    </Col>
                    <Col lg="6">
                        <Modal show={show2} onHide={handleClose2}>
                            <Modal.Header closeButton>
                                <Modal.Title>Weather Dashboard</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <a href="https://mfallesen.github.io/weather-api-homework/"><img src="assets/images/traveldash.png" alt="Make My Date website" className="img-fluid" /></a>
                                        <p> Basic Weather dashboard using open weather API</p>
                                        <a href="https://github.com/mfallesen/weather-api-homework">Explore on GitHub.</a>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose2}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Image src={`${process.env.PUBLIC_URL}/assets/images/traveldash.png`} onClick={handleShow2} thumbnail={true}></Image>

                    </Col>
                    <Col lg="6">
                        <Modal show={show3} onHide={handleClose3}>
                            <Modal.Header closeButton>
                                <Modal.Title>Next Step</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <a href="https://next-step-employment-app.herokuapp.com/"><img src="assets/images/nextStep.png" alt="Next Step Job Board for The Homeless" className="img-fluid" /></a>
                                        <p>A theoretical solution to Assist getting Homeless people connected with companies and organizations that are hiring to help get people back on their feat. </p>
                                        <a href="https://github.com/mfallesen/project-2-job-posting">Explore on GitHub.</a>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose3}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                        <Image src={`${process.env.PUBLIC_URL}/assets/images/nextStep.png`} onClick={handleShow3} thumbnail={true}></Image>

                    </Col>
                    

                </Row>
            </Container>

    )
}
