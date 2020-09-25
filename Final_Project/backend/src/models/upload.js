
import camelize from "camelize";
import connection from "../db";

const TABLE = "gallery";

export async function add(postPhoto,
  postTitle, 
  postInfo, postCompany,
  postPrice,) {
    const [insertedData] = await connection
      .insert({
      post_title: postTitle, 
      post_info: postInfo, 
      post_price: postPrice,
      post_company: postCompany,
      post_photo: postPhoto,
       })
      .into(TABLE)
      .returning("*");
    console.log(insertedData);
    return camelize(insertedData);
  }

  //Model to get all posts.
export async function getAll() {
  const result = await connection.select("*").from(TABLE);
  return camelize(result);
}