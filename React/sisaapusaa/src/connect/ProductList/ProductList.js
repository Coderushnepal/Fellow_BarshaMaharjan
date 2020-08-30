import React, { Component } from 'react';

import Product from "../../component/Product/Product";
import Title from "../../component/common/title";
import {ProductConsumer} from "../../Main/context";
import { Header } from '../../component/common/header';


function searchingFor(searchText) {
    return function(x) {
        return x.title.toLowerCase().includes(searchText.toLowerCase()||searchText)
    }
  }
export default class ProductList extends Component {
    constructor(props){
        super(props)
    this.state={
        //data
        products:[],
        searchFor:"",
      
      };
    }
   

    setSearchText = (searchText) => {
        this.setState(
          {
            searchFor: searchText,
          }
          
        );
      };
    
    render () {
        const { searchFor} = this.state;
        return (
            <React.Fragment>
                <Header setSearchText={this.setSearchText} />
            <div className="py-5">
                <div className="container">
                
                <Title name="Organic" title="Vegetables"/>
                <div className="row">
                    <ProductConsumer >
                        {value =>{
                            return value.products.filter(searchingFor(searchFor)).map(product => {
                                return <Product key={product.id} product={product}/>
                            })
                        }
                        }
                        
                    </ProductConsumer>
                    </div>
                </div>
                </div>
        </React.Fragment>
        )
    }
}