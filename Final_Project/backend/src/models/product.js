import snakeize from 'snakeize';
import camelize from 'camelize';
import connection from '../db';

const TABLE ='product';

/**
 * create
 * @param {*} payload 
 */
export async function create(payload) {
    const [result]=await connection.insert(snakeize(payload)).
    into(TABLE).returning('*');  
    return camelize(result) ;
 }

/**
 * getAll
 */
 export async function getAll() {
    const result = await connection.select("*").from(TABLE)
    return camelize(result);
}

// /**
//  * getBYId
//  * @param {*} id 
//  */
export async function getById(productId) {
    const data = await connection.select('id', 'title', 'info', 'price', 'company', 'image').from(TABLE).where({ id:productId })
    return camelize(data) ;
}

/**
 * update
 * @param {*} ProductId 
 * @param {*} params 
 */

export async function update(productId,params) {
    return connection(TABLE).update(snakeize(params)).where(({id:productId}));
  }

/**
 * delete
 * @param {*} productId 
 */
export async function remove(productId) {
    return connection(TABLE)
      .delete()
      .where({id: productId});
  }
