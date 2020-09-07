import logger from '../utils/logger';
import usersJson from '../data/user';
import * as User from '../models/userModel';
import NotFoundError  from '../utils/NotFoundError';
import * as UserPhoneNumber from '../models/userPhoneNumber';

/**
 * Get all users
 * **/
export async function getAllUsers() {
    logger.info('Fetching all users');
    const users = await User.getAll();
    const data = users.map(user => {
        const { phoneNumbers } = users;

       const hasEmptyPhoneNumbers = Object.keys(phoneNumbers[0]).length === 0;
       return {
           ...user,
           phoneNumbers: hasEmptyPhoneNumbers ? [] : phoneNumbers
       };
    });
    return {
        data,
        message: 'List of all users',
    }
}

/**
 * Get user by Id
 * @param userId
 * **/
export async function getUserById(userId) {
   
        logger.info(` Fetching all users info with id ${userId}`);
       
        const result = await User.getById(userId);
    
        if(!result){
            logger.error(` Cannot find users info with id ${userId}`);
            throw new NotFoundError (`Cannot find users info with id ${userId}`);
        }

        const phoneNumbers = await UserPhoneNumber.getPhoneNumbersByUserId(userId);

          return {
            data:{
                 ...result,
                 phoneNumbers
                },
            message: `Info of userid ${userId}`
            
          }
}

/**
 * Create user
 * @param params
 * **/
export async function createUser(params) {
    //Finding the max id from existing JSON file//
    const { firstName, lastName, email, password, phoneNumbers } =params;
    const UserInsertData = await User.create({
        firstName,
        lastName,
        email,
        password
    });

    const insertDataForPhoneNumber = phoneNumbers.map(phone =>({
        userId: UserInsertData.id,
        phoneNumbers: phone.number,
        type: phone.type
    }));
    const phoneNumberInsertedData = await UserPhoneNumber.add(insertDataForPhoneNumber)

     return{
         data: params,
        message:'New user added'
    };
}

/**
 * Remove user by id
 * @param userId
 * **/
export async function deleteUser(userId) {
    logger.info(` Fetching all users info with id ${userId}`);
       
        const result = await User.getById(userId);
    
        if(!result){
            logger.error(` Cannot find users info with id ${userId}`);
            throw new NotFoundError (`Cannot find users info with id ${userId}`);
        }
    const doesUserExist = usersJson.find(user => user.id === userId);
    if(!doesUserExist) {
        logger.error(` Cannot find users info with id ${userId}`);
        throw new Error (`Cannot find users info with id ${userId}`);
    }

   await  User.remove(userId);
   return {
       message: "Deleted use id " + userId
   };
}

/**
 * Update user
 * @param {*} userId
 * @param {*} params
 * **/
export function updateUser(userId, params) {
   
        const updatedJson = usersJson.map(user=> {
           if(user.is === userId) {
               return {
                   ...user,                 // orginal info//
                   ...params                // orgiinal is over ride by input data//
               };
           } 
           return user;
        });
           
            return{
                message:'User updates with id ' + userId,
            }; 
}