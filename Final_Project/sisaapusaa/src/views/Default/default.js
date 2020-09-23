import React, { Component } from 'react';

export default class Default extends Component {
    render () {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                     <div className="col-10 mx-auto text-center text-title pt-5">
                            <h2 className="display-3">404</h2>
                            <h2>Error</h2>
                            <h2>Page Not Found</h2>
                            <h3>The requested url
                                <span className="text-danger">{this.props.location.pathname} </span>
                                {" "} was not found
                            </h3>
                            
                        </div>
                    </div>
                
                </div>
        )
    }
}