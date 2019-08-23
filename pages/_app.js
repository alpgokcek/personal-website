import React from 'react'
import App, {Container} from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.scss'
class MyApp extends App {

    static async getInitialProps({Component, router, ctx}) {
        let pageProps ={};
        if (Component.getInitialProps){
            pageProps=await Component.getInitialProps(ctx);
        }

        return {pageProps}
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <div>
                <Component {...pageProps} />
            </div>

            );
    }
}

export default MyApp;