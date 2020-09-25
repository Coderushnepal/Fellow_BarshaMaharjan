import { Router } from 'express';

import * as endpoints from "./constants/endpoints";
import * as userController from "./controllers/login";
import * as productController from "./controllers/product";
import auth from './middlewares/Authenticate';
import {validateUserLogin, validateUserCreation,
} from "./schemas/userLogin";
import * as postController from "./controllers/upload";
import { validateAddPost } from "./schemas/upload";

const router = Router();

router.get("/", (req, res, next) => {
  res.json({
    name: "SisaaPusa Ecommerce",
    version: "1.0.0",
  });
});

router.post(
  endpoints.USER_SIGNUP,
  validateUserCreation,
  userController.createUser
);

router.post(
  endpoints.USER_LOGIN,
  validateUserLogin,
  userController.userLogin
);

/**
 * routes for productpage
 */
router.post(
  endpoints.CREATE_ProductContent,
  productController.createProductContent
);
 router.get(
  endpoints.GET_ProductContent,
  productController.getProductContent
  );
router.put(
  endpoints.UPDATE_ProductContent,
  productController.updateProductContent
  );
router.delete(
  endpoints.REMOVE_ProductContent,
  auth,
  productController.removeProductContent
  );

  router.get(
    endpoints. GET_Product_BY_ID,
    productController.getProductContentById
    );
    //Upload image in server
    router.post(
      endpoints.CREATE_POST, 
    
      postController.createPost);

      router.get(endpoints.ALL_POSTS, 
        postController.getAllPosts);

export default router;