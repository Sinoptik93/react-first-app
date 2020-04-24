import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        New post
      </div>
      <div>
        <textarea></textarea>
        <button>Test</button>
      </div>
      <div className={classes.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default MyPosts;