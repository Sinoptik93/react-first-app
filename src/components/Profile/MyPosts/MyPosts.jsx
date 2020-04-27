import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = (props) => {
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
        <Post message='Hello!' likesCount='0'/>
        <Post message='Message test' likesCount='23'/>
      </div>
    </div>
  )
}

export default MyPosts;