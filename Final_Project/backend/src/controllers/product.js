import * as productService from '../services/product'
/**
 * Controller to  create product content.
 * 
 * @param req
 * @param res 
 * 
 */
export function createProductContent(req, res, next) {
    productService
    .createProductContent(req.body)
    .then(data =>res.json(data))
    .catch(err => next(err))
  }
  
  
  /**
   * Controller to get product content.
   * 
   * @param req
   * @param res 
   * 
   */
  
  export function getProductContent(req, res, next) {
   
      productService
      .getProductContent()
      .then(data =>res.json(data))
      .catch(err => next(err))
    }
    export function getProductContentById(req, res, next) {
      const { productId} = req.params;
      productService
      .getProductContentById(productId)
      .then(data =>res.json(data))
      .catch(err => next(err))
    }
  
  /**
   * Controller to update the details of a product
   * 
   * @param req 
   * @param res 
   * @param next 
   */
  export function updateProductContent(req, res, next) {
    productService
    .updateProductContent(+req.params.productId,req.body)
    .then(data =>res.json(data))
    .catch(err => next(err))
  }
    
       
  /**
   * Controller to delete home page content
   * 
   * @param req 
   * @param res 
   * @param next 
   */
  export function removeProductContent(req, res, next) {
    productService
    .removeProductContent(+req.params.productId)
    .then(data =>res.json(data))
    .catch(err => next(err))
  }
  
    
