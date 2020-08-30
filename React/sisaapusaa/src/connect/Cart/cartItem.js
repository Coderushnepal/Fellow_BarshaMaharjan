import React from 'react';


export default function CartItem({item, value}) {
    const {id, img, title, price, total, count} = item;
    const {handleIncrease, handleDecrease, handleRemove} = value;
        return (
            <div className="row my-2  text-capitalize text-center"> 
                    <div className="col-10 mx-auto col-lg-2 "> 
                   <img src={img} className="img-fluid" style={{width:'5rem', height:'5rem'}} alt="product" />
                   </div>

                   <div className="col-10 mx-auto col-lg-2 "> 
                   <span className="d-lg-none"> Vegetables: </span>
                   {title}
                   </div>
                   
                   <div className="col-10 mx-auto col-lg-2 "> 
                   <span className="d-lg-none"> Price: Rs </span>
                   {price}
                   </div>
                   <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0"> 
                   <div className="d-flex justify-content-center">
                    <div> 
                    <span  className="btn btn-black mx-1" 
                    onClick={() => handleDecrease(id)} > - </span>
                    <span className="btn btn-black mx-1"> {count} </span>
                     <span  className="btn btn-black mx-1" 
                    onClick={() => handleIncrease(id)} > + </span>
                    <span> Kg </span>
                    </div>
                    </div>
                   </div>
                   {/* */}
                   <div className="col-10 mx-auto col-lg-2 "> 
                   <div className="cart-icon"  onClick={() => handleRemove(id)}>
                   <i className="fa fa-trash-o" aria-hidden="true"></i>
                       </div>
                   </div>
                   <div className="col-10 mx-auto col-lg-2 ">
                   <span> Total Price: Rs {total} </span>
                  
                   </div>
                </div>
        )
}