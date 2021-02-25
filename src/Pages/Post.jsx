import { gql, useQuery } from "@apollo/client";
import React from "react";
import {
  CommentGroup,
  Dimmer,
  Header,
  Loader,
  Segment,
} from "semantic-ui-react";
import FullPageLoader from "../Components/FullPageLoader";
import PostComment from "../Components/PostComment";

const Post = (props) => {
  const { loading, data } = useQuery(FETCH_POST_QUERY, {
    variables: {
      postId: props.postId,
    },
  });
  var post;
  if (data) {
    post = data.getPost;
  }
  return (
    <div className="flex font-comic">
      {loading ? (
        <FullPageLoader />
      ) : (
        post && (
          <>
            <div className="w-full h-auto p-2  md:w-2/6  ml-auto shadow-xl rounded-lg">
              <div className="flex justify-items-center align-middle items-center m-3">
                <img
                  className="w-16 rounded-full my-2 mx-2 border-2 border-red-400 "
                  src="https://avatars.githubusercontent.com/u/49105309?s=400&u=17e3a305920b300802a671a1b3dd9e149996f710&v=4"
                  alt="avatar"
                />
                <span className="flex-col">
                  <p> {post.postedBy.userhandle}</p>
                  <span>
                    Full Stack Developer &middot;{" "}
                    <span className="text-gray-600 text-sm">3seconds ago</span>
                  </span>
                </span>
              </div>
              <hr className="w-full" />
              <img
                className="object-cover mx-auto w-full  top-4 px-4 mt-6"
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="postimage"
              />
              <div className="flex flex-col px-4  m-2 space-y-2 mb-4">
                <h2 className="text-3xl">{post.title}</h2>
                <p>{post.content}</p>
              </div>
              <hr className="w-full" />
              <div className="flex px-4 m-2 space-x-2">
                <span>comments: {post.commentCount}</span>
                <span>Likes: {post.likesCount}</span>
              </div>
              <div className="flex px-4 m-2 mt-4 mb-4">
                <img
                  className="w-8 rounded-full my-2 mx-2 "
                  src="https://avatars.githubusercontent.com/u/49105309?s=400&u=17e3a305920b300802a671a1b3dd9e149996f710&v=4"
                  alt="avatar"
                />
                <input
                  className="bg-gray-100 rounded-full w-full pl-4 focus:outline-none  focus:border-blue-200 border-2"
                  type="text"
                  placeholder="post a comment"
                />
              </div>
            </div>
            <div className="hidden w-1/6 md:block mr-auto p-5">
              <CommentGroup>
                <Header as="h3" dividing>
                  Comments
                </Header>
                {post.comments.length < 1 ? (
                  <h1>No Comments Yet</h1>
                ) : (
                  post.comments.map((comment) => (
                    <PostComment key={comment.id} comment={comment} />
                  ))
                )}
              </CommentGroup>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Post;

const FETCH_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      id
      title
      content
      commentCount
      likesCount
      postedBy {
        id
        userhandle
      }
      comments {
        id
        body
        postedBy {
          userhandle
        }
      }
    }
  }
`;
