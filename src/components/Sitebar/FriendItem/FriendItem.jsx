import React from 'react';
import classes from './../Sitebar.module.css'

const FriendItem = (props) => {
  return (
    <div className={classes.friend}>
      <div className={classes.friendIcon}>
        <img src={props.state.photo} alt={props.state.friendName} className={classes.image}/>
      </div>
      <div className={classes.friendName}>
        {props.state.friendName}
      </div>
    </div>
  )
}


export default FriendItem;