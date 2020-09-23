import connection from "../db";
import snakeize from "snakeize";
import camelize from "camelize";


const table = "user_login";

// export async function getByEmail(email) {
//   const [result] = await connection.select("*").from(TABLE).where({ email });

//   return result ? camelize(result) : null;
// }


export async function create(params) {
  // console.log(params);
  const [data] = await connection
    .insert(snakeize(params))
    .into(table)
    .returning("*");

  return camelize(data);
}

export async function getUserCredentials(data) {
  console.log("Is credential here?", data);
  const [result] = await connection.select("*").from(table);
  return result ? camelize(result) : null;
}