import React, { Component } from 'react'
import {storeProducts, detailProduct} from "../constants/data";


const ProductContext = React.createContext();

 class ProductProvider extends Component {
    state = {
        products:[],
        detailProduct:detailProduct,
        cart:[],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        search: ""
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts =() => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]
        });
        this.setState(() => {
            return { products: tempProducts};
        });
    };

    getItem = id =>{
        const product = this.state.products.find(item => item.id === id)
        return product;
    }

// editSearchFor =(e) => {
// this.setState({searchFor: e.target.value})
// }

// searchSpace=(id, event) => {
//     const tempProducts = this.getItem(id);
// const products = tempProducts;
// let keyword = event.target.value;

//     if(this.state.search == null){
//         return  { products: tempProducts};
//      }
//         else if (products.toLowerCase().includes (this.state.search.toLowerCase())) {
//             return products
//            }
 
//     this.setState (() => {
//         this.setState ({search:keyword})
//     },
//     () => {
//         this.getItem();
//     }
//     );
// }
    handleDetail = (id) => {
       const vegies = this.getItem(id);
       this.setState( () => {
           return { detailProduct:vegies}
       })
    };
    addToCart = (id) => {
        let  tempVegies = [ ...this.state.products];
        const index = tempVegies.indexOf(this.getItem(id));
        const organicVegies = tempVegies[index]
        organicVegies.inCart = true;
        organicVegies.count = 1;
        const price = organicVegies.price;
        organicVegies.total = price;

        this.setState (() =>{
            return { organicVegies: tempVegies, cart: [...this.state.cart, organicVegies] };
        },
        () => {
            this.addTotals();
        }
        )
    };
openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
        return { modalProduct: product, modalOpen: true };
    });
};

closeModal = () => {
    this.setState(() => {
        return { modalOpen:false };
    });
};
handleIncrease = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item =>item.id === id)
    const index = tempCart.indexOf(selectedProduct);
    const cartProduct = tempCart[index];

    cartProduct.count = cartProduct.count + 1;
    cartProduct.total = cartProduct.count * cartProduct.price ;

    this.setState (() => {
        return { cart: [...tempCart] };
    },
    () => {
        this.addTotals();
    }
    );
}
handleDecrease = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item =>item.id === id)
    const index = tempCart.indexOf(selectedProduct);
    const cartProduct = tempCart[index];

    cartProduct.count = cartProduct.count - 1;

    if (cartProduct.count === 0 ) {
        this.handleRemove (id);
        console.log('removed');
    }
    else {
        cartProduct.total = cartProduct.count * cartProduct.price ;
        console.log('subtracted food');
    }
 
    this.setState (() => {
        return { cart: [...tempCart] };
    },
    () => {
        this.addTotals();
    }
    );
}
handleRemove = (id) => {
    let cartProduct = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id!== id);

        const index = cartProduct.indexOf(this.getItem(id));
        let removeProduct = cartProduct[index];
        removeProduct.inCart = false;
        removeProduct.count =0 ;
        removeProduct.total = 0;

        this.setState (() => {
            return {
                cart:[...tempCart],
                products:[...cartProduct]
            }
        },
        () => {
            this.addTotals();
        } );
}
clearCart = () => {
   this.setState (() => {
       return {cart:[]}
   }, () =>{
       this.setProducts();
       this.addTotals();
   })
}
addTotals = () => {
   let subTotal = 0;
   this.state.cart.map(item => (subTotal += item.total));
   const tax = subTotal * 0.05;
   const finalTax = parseFloat(tax.toFixed(2));
   const total = subTotal + finalTax
   this.setState(() => {
       return {
           cartSubTotal: subTotal,
           cartTax: finalTax,
           cartTotal: total
       }
   })
}
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                handleIncrease: this.handleIncrease,
                handleDecrease: this.handleDecrease,
                handleRemove: this.handleRemove,
                clearCart: this.clearCart,
                searchSpace: this.searchSpace

            }}>
                {this.props.children}

                </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };