import React from 'react';
import avatar from "../theme/assets/avatars/nasa.jpg";

export class Profile extends React.Component {
    render () {
        return (
            <div className = "profile"></div>
                <img
                    className = "avatar">
                    src = { avatar }
                 ></img>
                 <div className = "main">
                    <span className = "nickname">nasa</span>
                    <div className = "stats">
                        <div>
                        <span>7.436&nbsp;</span>
                            posts
                        </div>
                        <div>
                        <span>34,9m&nbsp;</span>
                            followers
                        </div>
                        <div>
                        <span>74&nbsp;</span>
                            followings
                        </div>
                </div>
            </div>
        );
    };
};