
import * as UserPost from "../models/upload";
import logger from '../utils/logger';
/**
 * @param  postPhoto
 * * @param  postPrice
 * * @param  postTitle
 * * @param  postCompany
 * * @param  postInfo
 * 
 */
export async function addPost(postTitle, 
  postInfo, postCompany,
  postPrice, postPhoto) {
    const data = await UserPost.add(postTitle, 
      postInfo, postCompany,
      postPrice, postPhoto);
    return {
      data,
      message: "New Photo and info added successfully.",
    };
  }

  export async function getAllPosts() {
    logger.info("Getting the gallery images");
    const data = await UserPost.getAll();
    // console.log(data);
    return {
      data,
      message: "Post details",
    };
  }