import React from 'react';
import "./MajorSide.css";
function MajorSide(){
    return(
        <div className="major">
            <section className="majorPage">
                <div className="developers">
                    <h1>Built for developers</h1>
                    <p>GitHub is a development platform inspired by the way you work.From <a href="#">open source</a> to <a href="#">business</a>, you can host and review code, manage projects, and build software alongside 40 million developers. </p>
                </div>
                <div className="mine">
                        <form>
                            <label>Username</label>
                            <input/>
                            <label>Email</label>
                            <input/>
                            <label>Password</label>
                            <input/>
                            <p>Make sure it`s at least 15 characters OR at least 8 characters including a number and a lowercase letter.<a href="#">Learn more</a>
                            </p>
                            <button>Sign up for GitHub</button>
                            <p>
                                By clicking "Sign up for GitHub", you agree to our <a href="#">Terms of Service </a>and <a href="#">Privacy Statements.</a> We`ll ocassionally send you account related emails.
                            </p>
                        </form>
                        <button className="suggest">Sign up for GitHub</button>
                </div>
            </section>
        </div>
    )
}
export default MajorSide;