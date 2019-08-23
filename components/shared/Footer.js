import React from 'react';
import {SocialIcon} from 'react-social-icons';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="social-wrapper social-container">
                    <SocialIcon network="twitter" bgColor="#F05132" url="https://twitter.com/alpgokcek"/>
                    <SocialIcon network="instagram" bgColor="#F05132" url="https://instagram.com/alpgokcek"/>
                    <SocialIcon network="linkedin" bgColor="#F05132" url="https://linkedin.com/in/alpgokcek"/>
                    <SocialIcon network="github" bgColor="#F05132" url="https://github.com/alpgokcek"/>
                    <p>Designed by Alp Gökçek.</p>
                </div>
            </div>
        );
    }

}

export default Footer;