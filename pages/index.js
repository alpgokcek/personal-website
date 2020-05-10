import React from 'react';
import BaseLayout from "../components/layouts/BaseLayout"
import "../styles/styles.scss";
import {Container, Row, Col} from 'reactstrap';
import Typed from 'react-typed';



class Homepage extends React.Component {

    render() {
        return (
            <BaseLayout className="cover">
                <div className="main-section">
                    <div className="background-image">
                        <img src="/static/images/background-index.png"/>
                    </div>

                    <Container className="cv-page-margin">
                        <Row>
                            <Col md="6">
                                <div className="hero-section">
                                    <div className={`flipper`}>
                                        <div className="back">
                                            <div className="hero-section-content">
                                                <h2> Computer Engineering Student </h2>
                                                <div className="hero-section-content-intro">
                                                    Have a look at my portfolio and job history.
                                                </div>
                                            </div>
                                            <img className="image" src="/static/images/section-1.png"/>
                                            <div className="shadow-custom">
                                                <div className="shadow-inner"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md="6" className="hero-welcome-wrapper">
                                <div className="hero-welcome-text">
                                    <h1>
                                        Welcome to the portfolio/CV website of Alp Gökçek.
                                    </h1>
                                    <h1>
                                        Get informed, collaborate and discover projects that I've been working on.
                                    </h1>
                                    <Typed
                                        className='typed-style'
                                        loop
                                        typeSpeed={50}
                                        backSpeed={80}
                                        strings={["Java", "Python", "C# for Unity", "C-Language", "Bash", "React.js"]}
                                            smartBackspace
                                            shuffle={false}
                                            backDelay={1000}
                                            fadeOut={false}
                                            fadeOutDelay={100}
                                            loopCount={0}
                                            showCursor
                                            cursorChar="|"
                                            />
                                </div>
                                <div className="hero-welcome-bio">
                                    <h1>
                                        Let's take a look on my work.
                                    </h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </BaseLayout>

        );
    }
}

export default Homepage;