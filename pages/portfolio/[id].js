import React from 'react';
import BaseLayout from "../../components/layouts/BaseLayout"
import Link from 'next/link';
import {withRouter} from 'next/router';
import axios from "axios";

class Portfolio extends React.Component{

    static async getInitialProps(context){
        let post={};
        const postID = context.query.id;
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`);
            post=response.data;
            //console.log(posts)
        }catch (e) {
            console.log(e)
        }

        return {post}
    }

    render() {
        console.log(this.props);
        const post = this.props.post;
        return(
            <BaseLayout>
                <h1>{post.title}</h1>
                <h3>{post.body}</h3>
                <p>{this.props.router.query.id}</p>
            </BaseLayout>
        );
    }
}

export default withRouter(Portfolio);