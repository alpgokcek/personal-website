import React from 'react'
import App from 'next/app'
import Head from 'next/head';
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
                <Head>
                <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑🏼‍💻</text></svg>"/>
                </Head>
                <Component {...pageProps} />
            </div>

            );
    }
}

export default MyApp;