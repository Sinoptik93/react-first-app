import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  return (
    <div className={classes.profile}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRajch10qkK_OsqMzQ8cgNV7XPF6US_zAtm4tEOELXqHO2_2meB&usqp=CAU' alt='img'></img>
      <div>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;