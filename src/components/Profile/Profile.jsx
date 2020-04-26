import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return(
  <div className={classes.content}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRajch10qkK_OsqMzQ8cgNV7XPF6US_zAtm4tEOELXqHO2_2meB&usqp=CAU' alt='img'></img>
    <div>
      ava + description
    </div>
    <MyPosts hey='yo'/>
  </div>)
}

export default Profile;