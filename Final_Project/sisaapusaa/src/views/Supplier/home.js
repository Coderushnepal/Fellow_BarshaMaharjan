import React from 'react';

export default function Home() {
    
        return (
            <div className="container-fluid text-center d-none d-lg-block">
                <Link to ="/product/upload">
                                <button className="btn-nav" >
                                <i className="fa fa-upload" aria-hidden="true" ></i> Upload </button>
                                </Link>
                </div>
        );
    }