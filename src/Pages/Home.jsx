import { gql, useQuery } from "@apollo/client";
import React from "react";
import PostCard from "../Components/PostCard";

const Home = () => {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  return (
   <div className="container">
     <div className="grid gap-2 grid-cols-1 md:grid-cols-2  space-x-2">
      {data && data.getPosts.map(post => <PostCard post={post}  key={post.id}/>)}
     </div>
   </div>
  )};

// fetch posts
const FETCH_POSTS_QUERY = gql`      
  {
    getPosts {
      id
      content
      title
      postedBy {
        userhandle
        fullname
      }
      likesCount
      commentCount
      createdAt
    }
  }
`;

export default Home;
