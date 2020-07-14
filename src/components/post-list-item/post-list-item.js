import React from "react";
import "./post-list-item.css";

const PostListItem = ({
  label,
  onToggleImportant,
  onDelete,
  onToggleLiked,
  like,
  important,
}) => {
  const classNames = ["app-list-item", "d-flex", " justify-content-between"];

  if (important) {
    classNames.push(" important");
  }

  if (like) {
    classNames.push(" like");
  }

  return (
    <div className={classNames.join(" ")}>
      <span className="app-list-item-label" onClick={onToggleLiked}>
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-star btn-sm"
          onClick={onToggleImportant}
        >
          <i className="fa fa-star"></i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fa fa-trash-o"></i>
        </button>
        <i className="fa fa-heart"></i>
      </div>
    </div>
  );
};

export default PostListItem;
