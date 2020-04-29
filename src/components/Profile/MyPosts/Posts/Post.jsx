import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.post}>
      <div className={classes.item}>
        <img src='https://i.pinimg.com/280x280_RS/55/51/7d/55517d19f559ad7c8aa3730302152715.jpg' alt='ava'></img>
        Chepukhin S.
      </div>
      <div>
        {props.message}
        <div>like {props.likesCount}</div>
      </div>
        
    </div>
  )
}

export default Post;