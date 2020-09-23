import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../Main/context';

export default class Details extends Component {
    render () {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, company, img, info, price, title , inCart} =
                    value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-green my-5">
                                    <h2> {title} </h2>
                                    </div>
                                </div>
                            {/* end title */}
                            {/* product-info */}
                            <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 ">
                                <img src={img} className="img-fuild" alt="product"/>
                                </div>
                                 {/* product-text */}
                                <div className="col-10 mx-auto col-md-6 my-3 ">
                                <h2>  Organic: {title} </h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2"> 
                                        Supplied by:
                                     <span className="text-uppercase"> {company} </span>
                                 </h4>
                                 <h4 className="text-green"> 
                                 <strong>
                                     Price: <span> Rs</span>
                                     {price}
                                     </strong>
                                 </h4>
                                 <p className="font-weight-bold mt-3 mb-0">  Info </p>
                                 <p className="text-muted lead"> {info} </p>
                                 {/* buttons */}
                                 <div>
                                     <Link to ='/'> 
                                     <button className="btn-detail" > Back to main</button>
                                     </Link>
                                     <button className="btn-detail-cart" disabled={inCart ? true : false} 
                                     onClick={() =>{
                                         value.addToCart(id);
                                         value.openModal(id);
                                     }} > 
                                     {inCart ? "InCart" : " Add to Cart"} </button>
                                     </div>
                                </div>
                                </div>
                        </div>

                    )
                }}
                </ProductConsumer>
        )
    }
}