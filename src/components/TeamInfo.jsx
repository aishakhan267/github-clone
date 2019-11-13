import React from 'react';
import "./TeamInfo.css";

const TeamInfo = () => {
    return (
        <div className="TeamInfo">
            <div className="innerTeamInfo">
                <h2>GitHub for teams</h2>
                <p>A better way to work together</p>
                <p className="extra">GitHub brings teams together to work through problems, move ideas forward, and learn from each other along the way.</p>
                <button>Sign up your team →</button>
            </div>
        </div>
    );
};
export default TeamInfo;