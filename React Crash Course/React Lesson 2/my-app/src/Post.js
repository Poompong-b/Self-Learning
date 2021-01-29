import React from "react";
import PropTypes from "prop-types";

function Post(id, title) {
  <div className="Post">
    <div className="Post_title">{title}</div>
    <img
      className="Post_image"
      src={"http://source.unsplash.com/random?sig=${id}"}
    />
  </div>;
}

Post.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Post;
