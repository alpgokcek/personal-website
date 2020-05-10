import React from 'react';
import BaseLayout from "../../components/layouts/BaseLayout"
import {withRouter} from 'next/router';
import BasePage from "../../components/layouts/BasePage"
import PortfolioBox from "../../components/layouts/PortfolioBox"
import github from "../../components/github-auth"


class Portfolio extends React.Component {

    static async getInitialProps(context) {
        let post = {};
        let languages = [];
        const postID = context.query.id;
        try {
            const response = await github.get(`/repos/alpgokcek/${postID}`);
            const responseLanguages = await github.get(`/repos/alpgokcek/${postID}/languages`);
            languages = Object.keys(responseLanguages.data);
            post = response.data;
        } catch (e) {
            console.log(e)
        }

        return {post, languages}
    }

    render() {
        const post = this.props.post;
        const languages = this.props.languages;
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