import * as postService from "../services/upload";

export async function createPost(req, res, next) {
    postService
      .addPost(req.body.postTitle, 
        req.body.postInfo, req.body.postCompany,
        req.body.postPrice, req.body.postPhoto)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }
  export async function getAllPosts(req, res, next) {
    postService
      .getAllPosts(+req.params.postId)
      .then((data) => res.json(data))
      .catch((err) => next(err));
  }