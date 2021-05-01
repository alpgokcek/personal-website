import React from 'react';
import {SocialIcon} from 'react-social-icons';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="social-wrapper social-container">
                    <SocialIcon network="instagram" url="https://instagram.com/alpgokcek"/>
                    <SocialIcon network="linkedin" url="https://linkedin.com/in/alpgokcek"/>
                    <SocialIcon network="github" url="https://github.com/alpgokcek"/>
                    <p>Designed by <br/>Alp Gökçek.</p>
                </div>
            </div>
        );
    }

}

export default Footer;