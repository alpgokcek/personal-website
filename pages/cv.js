import React from 'react';
import BaseLayout from "../components/layouts/BaseLayout"
import BasePage from "../components/layouts/BasePage"
import {Col, Container, Row} from "reactstrap";

// Import the main component
import Viewer from '@phuocng/react-pdf-viewer';

// Import the CSS
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';

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
                                <Viewer fileUrl="../static/files/CV.pdf" />
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
