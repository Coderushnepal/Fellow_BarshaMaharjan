//User endpoints

export const USER_LOGIN='/user/login';    
export const USER_SIGNUP='/user/signup';   
 
// Product endpoints 
// export const ADD_PRODUCT ='/product/:productId';
// export const UPDATE_PRODUCT = '/product/:productId';
// export const REMOVE_PRODUCT='/product/:productId' ;
// export const GET_ALL_PRODUCT='/product/:productId';
// export const GET_PRODUCT_BY_ID='/product/:productId';

export const GET_ProductContent = '/product';
export const GET_Product_BY_ID = '/product/:productId';
export const CREATE_ProductContent = '/product';
export const REMOVE_ProductContent= '/product/:productId';
export const UPDATE_ProductContent = '/product/:productId';

/**
 * cart page endpoints
 */
export const CREATE_Cart = '/cart';
export const GET_Cart = '/cart';
export const UPDATE_Cart_BY_ID = '/cart/:cartId';
export const REMOVE_Cart= '/cart/:cartId';