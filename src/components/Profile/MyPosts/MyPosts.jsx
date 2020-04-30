import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Posts/Post';

const MyPosts = (props) => {
  let postElements = props.post.map((post) =>
    <Post message={post.message} likesCount={post.likesCount}/>
  )

  let newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
  }

  let onPostChange =() => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)

  }

  return (
    <div>
      
      <div className={classes.posts}>
        New post
      </div>

      <div className={classes.posts}>
        <textarea onChange={ onPostChange } ref={newPostElement} value={ props.newPostText}/>
        <div>
          <button onClick= { addPost }>Publish post</button>
        </div>
      </div>

      <div>
        {postElements}
      </div>

    </div>
  )
}

export default MyPosts;