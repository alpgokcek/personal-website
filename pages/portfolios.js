import React from 'react';
import BaseLayout from "../components/layouts/BaseLayout"
import axios from "axios";
import Link from 'next/link'

class Portfolios extends React.Component{

    static async getInitialProps(){
        let posts={};
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts=response.data;
            //console.log(posts)
        }catch (e) {
            console.log(e)
        }

        return {posts:posts.splice(0,10)}
    }

    renderPosts = (posts)=> {
        return posts.map((post)=>{
            return <li key={post.id}><Link as={`/portfolio/${post.id}`} href="/portfolio/[id]"><a>{post.title}</a></Link></li>
        })
    };

    render() {
        const posts = this.props.posts;
        return(
            <BaseLayout>
                <h1>Portfolios</h1>
                <ul>
                    {this.renderPosts(posts)}
                </ul>
            </BaseLayout>
        );
    }
}

export default Portfolios;