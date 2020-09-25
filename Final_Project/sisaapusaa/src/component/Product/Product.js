import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../Main/context';
import axios from 'axios';

export default class Product extends Component {

    componentDidMount() {
        axios.get(`http://localhost:5000/product/${this.props.product.id}`)
        .then(res=> {
            console.log(res.data.data);
            const product = res.data.data;
            this.setState({ product });
        });
    }

    render () {
        const {id, title, img, price, inCart} = this.props.product
           
        return (
            <div className="col-9 mx-auto col-md-6 col-lg-3 my-3 grid-color">
                <div className="card">
                    <ProductConsumer>
                        {(value) => (
                            <div
                            className="img-container p-5"
                             onClick={ () =>
                                 {value.handleDetail(id)}}
                             >
                                 <Link to="/details">
                                     <img src={img} alt="product" className="card-img-top"/>
                                    
                                     </Link>
                                     <button 
                                     className="cart-btn" 
                                     disabled={inCart ? true : false} 
                                     onClick={()=> {
                                        value.addToCart(id);
                                        value.openModal(id);
                                     }}> 
                                     {inCart ? (
                                     <p className="text-capitalize mb-0" disabled> 
                                     {" "} 
                                     In Cart 
                                     </p>
                                     ):( 
                                     <i className="fa fa-shopping-cart" />
                                     )}
                                     </button>
                                 </div>
                        )}
                
                </ProductConsumer>
                {/* footer */}
                <div className="card-footer d-flex justify-content-between" >
                    <p className="aligh-self-center mb-0">
                        {title}
                         </p>
                         <h5 className="text-green"> 
                         <span className="mr-1"> Rs </span>
                         {price}
                         </h5>
                    </div>
                    </div>
                
                </div>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape ({
    id:PropTypes.number,
    image:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
    inCart:PropTypes.bool
    }).isRequired
};  