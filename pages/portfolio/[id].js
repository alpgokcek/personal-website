import React from 'react';
import BaseLayout from "../../components/layouts/BaseLayout"
import Link from 'next/link';
import {Router, withRouter} from 'next/router';
import axios from "axios";
import BasePage from "../../components/layouts/BasePage"
import PortfolioBox from "../../components/layouts/PortfolioBox"
import github from "../../components/github-auth"
import {Button} from "reactstrap";


class Portfolio extends React.Component {

    static async getInitialProps(context) {
        let post = {};
        let languages = [];
        const postID = context.query.id;
        try {
            const response = await github.get(`/repos/alpgokcek/${postID}`);
            const responseLanguages = await github.get(`/repos/alpgokcek/${postID}/languages`);
            console.log("*************");
            //console.log(responseLanguages.data);
            console.log("*************");
            languages = Object.keys(responseLanguages.data);
            //console.log(languages);
            post = response.data;
            //console.log(response.description)
        } catch (e) {
            console.log(e)
        }

        return {post, languages}
    }

    render() {
        //console.log(this.props);
        const post = this.props.post;
        const languages = this.props.languages;
        //console.log(post);
        return (
            <BaseLayout>
                <BasePage>
                    <div className="pbox-container">
                        <PortfolioBox title={this.props.router.query.id} description={post.description}
                        createdAt={post.created_at} updatedAt={post.updated_at} language={languages}/>
                    </div>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default withRouter(Portfolio);

/*
<h1>{this.props.router.query.id}</h1>
                        <hr/>
                        <h3>Description: {post.description}</h3>
                        <p>Created At: {post.created_at}</p>
                        <p>Last Update: {post.updated_at}</p>
                        <p>HTML: {post.html_url}</p>
                        <Button color="primary" size="lg" onClick={() => {
                            Router.push(post.html_url)
                        }}>View the source files</Button>
 */

//<a className="white-link" href={post.html_url}>