import React from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './FooterComponent';


function Main(){
    return(
        <div className="App-main">
            <Header />
            <Switch>
                <Route component={Home} path="/page/:npage" />
                <Redirect to="/page/1" />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;