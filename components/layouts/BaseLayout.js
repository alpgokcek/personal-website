import React from 'react';
import Header from '../shared/Header'
import Footer from '../shared/Footer'

const BaseLayout = (props) => {
    return(
        <div className="layout-container">
            <Header/>
            <main className={`cover ${props.className}`}>
                <div className="wrapper">
                    {props.children}
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default BaseLayout;