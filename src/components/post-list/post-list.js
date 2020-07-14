import React from "react";
import PostListItem from "../post-list-item/post-list-item";
import "./post-list.css";
import { ListGroup } from "reactstrap";

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
  const elements = posts.map((post, id) => {
    return (
      <li className="list-group-item" key={id}>
        <PostListItem
          label={post.label}
          like={post.like}
          important={post.important}
          onDelete={() => onDelete(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleLiked={() => onToggleLiked(id)}
        />
      </li>
    );
  });
  return <ListGroup className="app-list">{elements}</ListGroup>;
};

export default PostList;
