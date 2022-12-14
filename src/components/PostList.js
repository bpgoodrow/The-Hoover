import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function PostList(props) {
  const postCardStyles = {
    position: 'relative'
  }


  return(
    <React.Fragment>
      <div style={postCardStyles}>
        {Object.values(props.postList).map((post)=> (
          <div key={post.id}>
            <Post
            whenPostClicked = {props.onPostSelection}
            postTitle={post.postTitle}
            postTime={post.postTime}
            votes={post.votes}
            user={post.user}
            postContent={post.postContent}
            id={post.id}
             />
          </div>
        ))}
          
      </div>
    </React.Fragment>
  );
}

PostList.propTypes = {
  postList: PropTypes.object,
  onPostSelection: PropTypes.func
};

export default PostList;

// (function(a, b){return b.votes - a.votes})