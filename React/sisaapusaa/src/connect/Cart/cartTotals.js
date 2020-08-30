import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals ({value}) {
    const { cartSubTotal, cartTax, cartTotal, clearCart} =value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-smm-5 ml-md-auto col-sm-8 text -capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5 "
                            type="button"
                            onClick={() => clearCart ()}>
                               Clear Cart </button>
                        </Link>
                        <h5>
                            <span className="text-title"> Sub Total: Rs {cartSubTotal} </span>
                            </h5>
                                <h5>
                                    <span className="text-title"> Tax: Rs {cartTax} </span>
                                </h5>
                                <hr className="line-total" />
                                 <h5>
                                    <span className="text-title"> Total Price: Rs {cartTotal} </span>
                            </h5>
                            <hr className="line-pay" />
                            <h3> Pay Now </h3>
                            <div className="pay-1">
                            <a href=" https://esewa.com.np/#/home"> 
                               <button className="btn-sewa"> E-sewa </button>
                               </a>
                               </div>
                               <div className="pay-2">
                               <a href=" https://khalti.com/login/"> 
                               <button className="btn-khalti">  Khalti </button>
                               </a>
                                </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
    );
}