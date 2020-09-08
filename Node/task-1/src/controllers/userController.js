import * as userService from '../services/userService';


/**
 * Controller to create new users
 * @param {*} req
 * * @param {*} res
 * * @param {*} next
 */
export function createUser(req, res, next) {
     userService
     .createUser(req.body)
     .then(data => res.json(data))
    .catch(err => next(err));
}
