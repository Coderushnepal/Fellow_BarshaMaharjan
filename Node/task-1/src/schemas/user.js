import Joi from 'joi';

export const CRAETE_USER_SCHEMA =  Joi.object().keys({
    firstName: Joi.string().max(20).required(),
    lastName: Joi.string().max(20).required(),
    email: Joi.string().max(100).required(),
    password: Joi.string().min(8).max(30).required(),
    phoneNumbers: Joi.array().required().min(0).items(Joi.object().keys({
        number: Joi.number().min(100000000).max(9999999999).required(),
        type: Joi.string().min(4).max(4).required().valid('home', 'cell', 'work')
    }))
});

export function validateUserCreation(req, res , next) {
   try {
    Joi.assert(req.body, CRAETE_USER_SCHEMA);
    next();
   } catch (err) {
        next(err);
        }
    }
