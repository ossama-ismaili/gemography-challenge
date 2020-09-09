import React from 'react';
import moment from 'moment';


function Repository({title, description, image, stars, issues, time}){
    return(
        <div className="App-repository">
            <div className="media">
            <img src={image} className="mr-3" alt="rep img" />
                <div className="media-body">
                    <h5 className="mt-0">{title}</h5>
                    <p>{description}</p>
                    <span className="stars">Stars : {stars}</span>
                    <span className="issues">Issues : {issues}</span>
                    <span className="time">Submitted {moment(time).fromNow()}</span>
                </div>
            </div>
        </div>
    );
}

export default Repository;