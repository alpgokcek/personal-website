import React from 'react';
import Header from '../shared/Header'
const BaseLayout = (props) => {
    return(
        <div>
            {props.children}
            <Header/>
        </div>
    );
};

export default BaseLayout;