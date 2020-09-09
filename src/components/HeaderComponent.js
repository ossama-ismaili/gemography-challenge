import React from 'react';
import { Jumbotron } from 'reactstrap';

function Header() {
    return(
        <div className="App-header">
            <Jumbotron>
            <ul className="list-unstyled">
                <li><a href="https://www.github.com/ossama-ismaili/"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/ossama-ismaili/"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://www.facebook.com/ossama.ismaili.dev/"><i className="fa fa-facebook"></i></a></li>
            </ul>
                <h1>Gemography Challenge <span className="icon fa fa-check-circle"></span></h1>
            </Jumbotron>
        </div>
    );
}

export default Header;