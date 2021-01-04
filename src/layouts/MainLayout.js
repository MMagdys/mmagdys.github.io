import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'


const MainLayout = ({component: Component, restricted=false, ...rest}) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            <div>
                <Header />
                <div style={{padding: '2rem'}}>
                    <Component {...props} />
                </div>
                <Footer />
            </div>
        )} />
    );
};

export default MainLayout;
