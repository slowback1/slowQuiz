import React, { Component } from 'react';

import SocialLinks from './socialLinks';
import OtdbLogo from './otdbLogo';

class Footer extends Component {
    render() {
        return (
                <div className="footer">
                  <div className="footerInfo">
                        <h2>SlowQuiz is built and mantained by Andrew Wobeck </h2>
                    </div>
                    <div className="footerBottom">
                        <SocialLinks />
                        <OtdbLogo />
                    </div>
                </div>
            )
    }
}

export default Footer;