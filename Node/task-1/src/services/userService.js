import logger from '../utils/logger';
import { hash } from '../utils/crypt';
import * as User from '../models/userModel';
import NotFoundError from '../utils/NotFoundError';
import BadRequestError from '../utils/BadRequestError';

/**
 * Create user
 * @param params
 * **/
export async function createUser(params) {
    const existingUser = await User.getUserByEmail(params.email);
     if (existingUser) {
        logger.error('There is already an existing user with this email');
        throw new BadRequestError('There is already an existing user with this email');
    }
    const hashedPassword = hash(params.password);

  const userInsertData = await User.create({ ...params, password: hashedPassword });
            return{
                data: userInsertData,
                message: "New user added successfully"
            };     
}
 
/**
 * Get user by id.
 *
 * @param userId
 */
export async function verifyUser(userId) {
    logger.info(`Verifying if userId ${userId} exists`);
  
    const user = await User.getUserById(userId);
  
    if (!user) {
      logger.error(`Cannot find user with id ${userId}`);
  
      throw new NotFoundError(`Cannot find user with id ${userId}`);
    }
  } 
