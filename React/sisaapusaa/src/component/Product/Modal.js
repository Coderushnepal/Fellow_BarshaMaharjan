import React, { Component } from 'react';
import { ProductConsumer } from '../../Main/context';
import { Link } from 'react-router-dom';

export default class extends Component {
    render () {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const { img, title, price } = value.modalProduct;

                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                        <div className="modal-box">
                              <div className="container">
                              <div className="row">
                              <div id ="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize modal-boxes">
                                  <h4> item added to cart ! </h4>
                                  <img src={img} className="img-fuild" alt="product" />
                                  <h5> {title} </h5>
                                  <h5 className="text-muted"> Price: Rs {price} </h5>
                                  <Link to='/'>
                                  <button className="btn-modal-1" 
                                  onClick={() => closeModal()}>
                                     Continue Shopping    </button>
                                  </Link>
                                  <Link to='/cart'>
                                  <button className="btn-modal-2"
                                   onClick={() => closeModal()}>
                                     Go to Cart    </button>
                                  </Link>
                            </div>
                            </div>
                            </div>
                            </div>
                        );
                    }
                }}
                </ProductConsumer>
        )
    }
}