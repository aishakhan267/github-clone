import React from 'react';
import './Robot.css';

const Robot = () => {
    return (
        <div className="Robot">
            <div className="robotImg">
                <img src="https://github.githubassets.com/images/modules/site/home-illo-team.svg" alt="robot"/>
            </div>
            <div className="robotDetails">
                <ul>
                    <li>
                        <h3>Write better code</h3>
                        <p>
                            collaboration makes perfect. The conversation and code reviews that happen in pull requests help your team share the weight of your work and improve the software you buid.
                            <a href="#">Learn about code review.</a>
                        </p>
                    </li>
                    <li>
                        <h3>Manage your chaos</h3>
                        <p>
                            Take a deep breath. On Github , project management happens in issues and project boards, right alongside your code.All you have to do is mention a teammate to get them involved.
                            <a href="#">Learn about project management.</a>
                        </p>
                    </li>
                    <li>
                        <h3>Find the right tools</h3>
                        <p>
                            Browse and buy apps from GitHub Marketplace with your GitHub account.Find the tools you like or discover new favorites-then start using them in minutes.
                            <a href="#">Learn about integrations.</a>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Robot;