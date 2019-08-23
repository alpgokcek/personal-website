import React from 'react';
import BaseLayout from "../components/layouts/BaseLayout"
import axios from "axios";
import Link from 'next/link'
import BasePage from "../components/layouts/BasePage"
import github from "../components/github-auth"
import PortfolioBox from "../components/layouts/PortfolioBox";


class Portfolios extends React.Component{

    static async getInitialProps(){
        let posts={};
        try {
            //const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const response = await github.get('/users/alpgokcek/repos');
            console.log("*************");
            posts = response.data;
            //console.log(posts)
        }catch (e) {
            console.log(e);
        }
        return {posts}
    }

    renderPosts = (posts)=> {
        return posts.map((post)=>{
            return <PortfolioBox key={post.name} portfolio={post} description={post.description}/>

        })
    };

    render() {
        const posts = this.props.posts;
        let i =0;
        return(
            <BaseLayout>
                <BasePage className="pb-margin">
                    <h1>Portfolios</h1>
                    <div className="pbox-container">
                        {this.renderPosts(posts)}
                    </div>
                </BasePage>
            </BaseLayout>
        );
    }
}

export default Portfolios;