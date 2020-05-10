import React from 'react'
import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/styles.scss'
import { Worker } from '@phuocng/react-pdf-viewer';
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
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.3.200/build/pdf.worker.min.js">
                    <Component {...pageProps} />
                </Worker>
                
            </div>

            );
    }
}

export default MyApp;