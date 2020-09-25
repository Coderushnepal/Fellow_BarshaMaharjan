import Joi from "joi";
const ADD_POST_SCHEMA = Joi.object().keys({
   postPhoto: Joi.string().max(500).required().allow(""),
   postTitle: Joi.string().max(20).required().allow(""),
   postInfo:  Joi.string().max(500).required().allow(""),
  postPrice: Joi.string().max(20).required().allow(""),
  postCompany: Joi.string().max(500).required().allow(""),
});

export function validateAddPost(req, res, next) {
    try {
      Joi.assert(req.body, ADD_POST_SCHEMA);
      next();
    } catch (err) {
      next(err);
    }
  }