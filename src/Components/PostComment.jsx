import React from "react";
import { Comment } from "semantic-ui-react";

const PostComment = ({ comment }) => {
  const regEx = /(@\w+)/gi;
  var userhandle;
  var restcomment;
  if (comment.body) {
    userhandle = comment.body.match(regEx);
    restcomment =
      comment.body.split(userhandle).length < 2
        ? comment.body.split(userhandle)[0]
        : comment.body.split(userhandle)[1];
  }
  return (
    <Comment>
      <Comment.Avatar as="a" src="https://picsum.photos/200/300?random=2" />
      <Comment.Content>
        <Comment.Author as="a">{comment.postedBy.userhandle}</Comment.Author>
        <Comment.Metadata>
          <span>Today at 5:42PM</span>
        </Comment.Metadata>
        <Comment.Text>
          <p className="text-gray-500">
            {userhandle && (
              <span className="bg-green-600 text-white p-1 text-sm rounded-full">
                {userhandle}
              </span>
            )}
            <span>{restcomment && restcomment}</span>
          </p>
        </Comment.Text>
        <Comment.Actions>
          <a>Reply</a>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};

export default PostComment;
