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
                            <div style={{ height: '900px' }}>
                            <iframe style={{ width: '100%', height: "100%" }} src={"http://www.alpgokcek.com/static/files/cv.pdf"}></iframe>
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
