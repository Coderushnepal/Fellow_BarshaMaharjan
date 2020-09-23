import * as Product from '../models/product';
import logger from '../utils/logger';

/**
 * create Product content
 * @param {} payload 
 */

export async function createProductContent(payload) {
    logger.info("Home created successfully")
    const data=await Product.create(payload);
    return {
        data,
        message:'Home created successfully'
    }
}

/**
 * get Product content
 */
export async function getProductContent() {
logger.info("Fetching  Product page content")
const data=await Product.getAll()
return {
    data,
    message: 'Product page content received',   
    }; 

}

export  async function getProductContentById(productId) {
    const [data] =await Product.getById(productId);
  
    return {
      data,
      message: `Information about productId ${productId}`,
     
    };
  }

/**
 * update Product content
 * @param {*} productId 
 * @param {*} params 
 */
export async function updateProductContent(productId,params) {
    const data=await Product.update(productId, params);
    console.log(data)

    return {
        data,
        message: `updated home with about id ${productId}`,
       
      };
}

/**
 * Delete a productcontent
 * @param productId 
 */
export async function removeProductContent(productId) {
  await Product.remove(productId);

  return {
    message: "Deleted Product content with id " + productId
  };
 }