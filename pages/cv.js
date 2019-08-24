import React from 'react';
import BaseLayout from "../components/layouts/BaseLayout"
import BasePage from "../components/layouts/BasePage"
import {Col, Container, Row} from "reactstrap";

class CV extends React.Component {


    render() {
        return (
            <BaseLayout>
                <BasePage>
                    <h1 className="page-title">My CV</h1>
                    <div className="background-image">
                        <img src="/static/images/background-index.png"/>
                    </div>
                    <Container className="cv-page-margin">
                        <Row>
                            <Col>
                                <img className="cv cv-page" src="../static/images/cv.jpg" width="500" height="648"/>
                            </Col>
                            <Col className="hero-welcome-wrapper">
                                <div className="hero-welcome-text">
                                    <a className="nav-link white-link" href="../static/files/cv.pdf"><h1 className="cv-download">Click here to download my CV as PDF!</h1></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default CV;
