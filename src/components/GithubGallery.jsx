import React from 'react';
import './GithubGallery.css';

const GithubGallery = () => {
    return (
        <div className="GithubGallery">
            <p>See how the world's leading companies use GitHub Enterprise.</p>
            <div className="gallery">
                <figure>
                    <img src="https://customer-stories-feed.github.com/customer_stories/mgm-resorts/hero.jpg" alt="Resort" />
                    <figcaption>
                        <h2>MGM Resort International</h2>
                        <h3>Hospitality</h3>
                        <a href="#">Read more →</a>
                    </figcaption>
                </figure>
                <figure>
                    <img src="https://customer-stories-feed.github.com/customer_stories/nationwide/nw_hero.jpg" alt="bike pic" />
                    <figcaption>
                        <h2>Nationwide</h2>
                        <h3>Insurance</h3>
                        <a href="#">Read more →</a>
                    </figcaption>
                </figure>
                <figure>
                    <img src="https://customer-stories-feed.github.com/customer_stories/sap/sap6.jpg" alt="engineers" />
                    <figcaption>
                        <h2>SAP</h2>
                        <h3>Business Software</h3>
                        <a href="#">Read more →</a>
                    </figcaption>
                </figure>
                <figure>
                    <img src="https://customer-stories-feed.github.com/customer_stories/spotify/spotifyhero.jpg" alt="spotify" />
                    <figcaption>
                        <h2>Spotify</h2>
                        <h3>Technology / Streaming</h3>
                        <a href="#">Read more →</a>
                    </figcaption>
                </figure>

            </div>
        </div>
    );
};

export default GithubGallery;