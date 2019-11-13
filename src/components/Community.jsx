import React from 'react';
import "./Community.css";

const Community = () => {
    return (
        <>
        <div className="TeamInfo">
            <div className="innerTeamInfo">
                <h2>Community</h2>
                <p>Welcome home,developers</p>
                <p className="extra">GitHub is home to the world’s largest community of developers and their projects...</p>
            </div>
        </div>
        <div className="GithubGallery">
            <div className="gallery">
                <figure>
                    <img src="https://customer-stories-feed.github.com/customer_stories/freakboy3742/hero.jpg" alt="Russell"/>
                    <figcaption>
                        <h2>Russell Keith-Magee</h2>
                        <h3>
                            Russell Keith-Magee created BeeWare to fill a gap in his own process. Today, BeeWare is the go-to project for supporting Python on every platform.
                        </h3>
                        <a href="#">Read more →</a>
                    </figcaption>
                </figure>
                <figure>
                <   img src="https://customer-stories-feed.github.com/customer_stories/kris-nova/hero.jpg" alt="Kris"/>
                        <figcaption>
                            <h2>Kris Nova</h2>
                            <h3>
                                Kris Nova quickly developed a passion for open source software. Now she gets to work on open source tooling at her day job, which includes maintaining Kubernetes Operations (kops).
                            </h3>
                            <a href="#">Read more →</a>
                        </figcaption>
                </figure>
                <figure>
                    <img src="https://customer-stories-feed.github.com/customer_stories/yyx990803/hero.jpg" alt="Evan"/>
                    <figcaption>
                        <h2>Evan You</h2>
                        <h3>
                            In 2013, Evan You founded Vue, a Javascript framework funded by the community on Patreon. In 2016, Vue reached 2,000,000 downloads.
                        </h3>
                        <a href="#">Read more →</a>
                    </figcaption>
                </figure>
                <figure>
                    <img src="https://customer-stories-feed.github.com/customer_stories/jessfraz/hero.jpg" alt="Jess"/>
                    <figcaption>
                        <h2>Jess Frazelle</h2>
                        <h3>
                            Jess Frazelle works on Kubernetes full-time. Previously she maintained Docker, a software containerization platform used by thousands of teams.
                        </h3>
                        <a href="#">Read more →</a>
                    </figcaption>
                </figure>
            </div>
        </div>
        <div className="count">
            <div className="countBalls">
                <div className="repo">
                    <h2>100M*</h2>
                    <p>repositories worldwide</p>
                </div>
                <div className="developers">
                    <h2>40M*</h2>
                    <p>developers worldwide</p>
                </div>
                <div className="organiz">
                    <h2>2.1M*</h2>
                    <p>businesses & organizations worldwide</p>
                </div>
            </div>
            <div className="countDetails">
                <ul>
                    <li>
                        <p>
                            GitHub’s users create and maintain influential technologies
                            alongside the world’s largest
                            <span style={{ color: "#f66a0a" }}> open source community</span>
                        </p>
                    </li>
                    <li>
                        <p>
                            <span style={{ color: "#0366d6" }}>Developers</span> use GitHub
                            for personal projects, from experimenting with new programming
                            languages to hosting their life’s work.
                        </p>
                    </li>
                    <li>
                        <p>
                            <span style={{ color: "#6f42c1" }}>Businesses</span> of all
                            sizes use GitHub to support their development process and to
                            securely build software.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Community;