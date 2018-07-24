import React, { Component } from 'react';

import SocialLinks from './socialLinks';
import OtdbLogo from './otdbLogo';

class Footer extends Component {
    render() {
        return (
                <div className="footer">
                    <SocialLinks />
                    <div className="footerInfo">
                        <h2>SlowQuiz is built and mantained by Andrew Wobeck </h2>
                    </div>
                    <OtdbLogo />
                </div>
            )
    }
}

export default Footer;