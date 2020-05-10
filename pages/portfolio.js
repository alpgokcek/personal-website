import React from 'react';
import BaseLayout from "../components/layouts/BaseLayout"
import axios from "axios";
import Link from 'next/link'
import BasePage from "../components/layouts/BasePage"
import github from "../components/github-auth"
import PortfolioBox from "../components/layouts/PortfolioBox";
import {Container, Row, Col} from "reactstrap";


class Portfolio extends React.Component {

    static async getInitialProps() {
        let posts = {};
        try {
            const response = await github.get('/users/alpgokcek/repos');
            posts = response.data;
        } catch (e) {
            console.log("sad");
        }
        return {posts}
    }

    renderPosts = (posts) => {
        return posts.map((post) => {
            return <PortfolioBox key={post.name} portfolio={post} description={post.description}/>

        })
    };

    render() {
        const posts = this.props.posts;
        let i = 0;
        return (
            <BaseLayout>
                <BasePage className="pb-margin">
                    <h1>Portfolios</h1>
                    <div className="background-image">
                        <img src="/static/images/background-index.png"/>
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <div className="flexbox-container">
                                    <div>
                                        {this.renderPosts(posts.slice(0, Math.floor(posts.length / 2)))}
                                    </div>
                                    <div>
                                        {this.renderPosts(posts.slice(Math.floor(posts.length / 2)))}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default Portfolio;