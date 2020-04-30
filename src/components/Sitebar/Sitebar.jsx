import React from 'react';
import classes from './Sitebar.module.css'
import FriendItem from './FriendItem/FriendItem';

const Sitebar = (props) => {
  let friendsList = props.state.map( (friend) => <FriendItem state={friend} />)

  return (
    <div className={classes.friendList}>
      <div>
        <h3>Friends</h3>
      </div>
      <div>
        {friendsList}
      </div>
    </div>
  )
};
export default Sitebar;
