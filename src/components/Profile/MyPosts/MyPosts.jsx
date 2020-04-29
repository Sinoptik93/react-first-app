import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = (props) => {
  let postData = [
    {id: 1, message: 'How are you?', likesCount: 12}, 
    {id: 2, message: 'It my first post!!!', likesCount: 23},
    {id: 3, message: 'Ha-hahaha', likesCount: 23},
    {id: 4, message: 'WHAT???', likesCount: 23},
  ]
  
  let postElements = postData.map( (post) =>
    <Post message={post.message} likesCount={post.likesCount}/>
  )

  return (
    <div>
      
      <div className={classes.posts}>
        New post
      </div>

      <div className={classes.posts}>
        <textarea></textarea>
        <div>
          <button>Publish post</button>
        </div>
      </div>

      <div>
        {postElements}
      </div>

    </div>
  )
}

export default MyPosts;