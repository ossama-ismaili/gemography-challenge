import React, { useState } from 'react';


function  Footer() {
    const [pages]=useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]);

    const renderLinks=pages.map(
        item=><li><a href={`/page/${item}`}>{item}</a></li>
    );

    return(
        <div className="App-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-unstyled">
                            {renderLinks}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;