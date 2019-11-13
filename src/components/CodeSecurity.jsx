import React from 'react';
import './CodeSecurity.css';

const CodeSecurity = () => {
    return (
        <div className="CodeSecurity">
            <div className="innerCodeSecurity">
                <ul>
                    <li>
                        <h3>Code security</h3>
                        <p>
                            Prevent problems before they happen. Protected branches, signed commits, and required status checks protect your work and help you maintain a high standard for your code. 
                        </p>
                    </li>
                    <li>
                        <h3>Access controlled</h3>
                        <p>
                            Encourage teams to work together while limiting access to those who need it with granular permissions and authentication through SAML/SSO and LDAP
                        </p>
                    </li>
                </ul>
            </div>
            <div className="verifiedImg">
                <img src="https://github.githubassets.com/images/modules/site/home-illo-business.png" alt="administration"/>
            </div>
        </div>
    );
};

export default CodeSecurity;