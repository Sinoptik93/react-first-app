import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div>
      <div className={classes.item}>
        Post 1
      </div>
      <div>
        {props.message}
        <div>like {props.likesCount}</div>
      </div>
        
    </div>
  )
}

export default Post;