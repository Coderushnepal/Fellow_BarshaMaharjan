import logger from "../utils/logger";
import * as userLoginModels from "../models/userLogin";
import { hash, compare } from "../utils/crypt";
import { generateToken } from '../utils/jwt';
import * as UserSession from '../models/userSession';
import BadRequestError from "../utils/BadRequestError";

/**
 * Create an admin
 *
 * @param params
 */
export async function createUser(params) {
  const hashedPassword = hash(params.password);
  const existingUser = await userLoginModels.create({
  
    email: params.email,
    password: hashedPassword,
  });

  return {
    data: {
      existingUser,
    },
  };
}

/**
 * Verify email and password and login
 *
 * @param params
 */
export async function userLogin(params) {
  const { email, password } = params;
  const user = await userLoginModels.getUserCredentials({
    email,
    password
  });

  if (!user) {
    logger.error("Invalid Login user Credentials");

    throw new BadRequestError("Invalid login u credentials");
  }

  const isPasswordValid = compare(password, user.password);
  if (!isPasswordValid) {
    logger.error("Invalid login password credentials");

    throw new BadRequestError("Invalid login pwd credentials");
  }

  const token = generateToken({
    id: user.id,
    email: user.email
  });

  await UserSession.saveToken(user.id, token);

  user.password = undefined;

  return {
    data: {
      user,
      token
    },
    message: "Logged In Successfully!!",
  };
}