import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = (props) => {
  let postElements = props.state.postData.map((post) =>
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