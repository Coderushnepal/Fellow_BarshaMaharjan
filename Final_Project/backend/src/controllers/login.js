import * as userService from "../services/userLogin";

/**
 * Controller to create an user
 *
 * @param  req
 * @param  res
 * @param  next
 */
export function createUser(req, res, next) {
  userService
    .createUser(req.body)
    .then((data) => {
      console.log(data);
      return res.json(data);
    })
    .catch((err) => next(err));
}

/**
 * Controller for user login
 *
 * @param req
 * @param res
 * @param next
 */

export function userLogin(req, res, next) {
  // console.log(req.body);

  userService
    .userLogin(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}