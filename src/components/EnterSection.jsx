import React from 'react';
import "./EnterSection.css";

const EnterSection = () => {
    return (
        <div>
            <div className="enter">
                <div className="innerEnter">
                <h2>Get started with GitHub Enterprise</h2>
                <p>Take collaboration to the next level with security and administrative features built for businesses.</p>
                <button>Contact Sales</button>
                <p><a href="#">Or start a free trial of Enterprise Server →</a></p>
                </div>
            </div>
            <div className="outerActions">
                <div className="actions"> 
                    <h2>Introducing GitHub Actions with CI/CD</h2>
                    <p>Automate any workflow with GitHub Actions.See the latest updates announced at our HQ reveal.</p>
                    <button><a href="#">Check it out →</a></button>
                </div>
            </div>
        </div>
        
    );
};

export default EnterSection;