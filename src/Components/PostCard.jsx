import { Link } from "@reach/router";
import React from "react";
import { Icon, Label } from "semantic-ui-react";

const PostCard = (props) => {
  const {
    id,
    title,
    content,
    postedBy,
    likesCount,
    commentCount,
    createdAt,
  } = props.post;
  return (
    <>
      <div className="md:p-8 p-2 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-2">
          <div>
            <img
              className="rounded-lg w-full"
              src="https://www.faithoverseasbd.com/wp-content/themes/faithoverseasbd/img/uni/chandigarh-ex/chandigarh-university-campus-1.jpg"
            />
            <div className="flex space-x-3 m-4 w-full h-10">
              <Label basic color="orange">
                <Icon name="fire" size="large" />
                {likesCount + " burners"}
              </Label>
              <Label basic color="blue">
                <Icon name="comment" size="large" />
                {commentCount + " comments"}
              </Label>
            </div>
          </div>
          <div>
            <p className="text-indigo-500 font-semibold text-base mt-2">
              {postedBy.userhandle}
            </p>
            <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
              <Link to={`/post/${id}`}>{title}</Link>
            </h1>
            <div className="max-w-full">
              <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
                {content}
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-10">
              <img
                className="w-10 h-10 object-cover object-center rounded-full"
                src="https://avatars.githubusercontent.com/u/49105309?s=400&u=17e3a305920b300802a671a1b3dd9e149996f710&v=4"
                alt="random user"
              />
              <div>
                <p className="text-gray-900 font-semibold">
                  {postedBy.fullname}
                </p>
                <p className="text-gray-500 font-semibold text-sm">
                  {Date(createdAt)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
