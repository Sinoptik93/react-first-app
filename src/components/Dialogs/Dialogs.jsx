import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
  
  let path = `/dialogs/${props.id}`;

  return (
    <div className='test'>
      <NavLink to={path} activeClassName='activeDialog'>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={classes.message}>
      {props.message}
    </div>
  )
}

const Dialogs = (props) => {
  
  let dialogsData = [
    {id: 1, name: 'Max'}, 
    {id: 2, name: 'Evgen'},
    {id: 3, name: 'Serj'},
    {id: 4, name: 'Svetlana'},
    {id: 5, name: 'Alexander'},
    {id: 6, name: 'Konstatntin'},
  ]

  let messagesData = [
    {id: 1, message: 'Hello'}, 
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Fine! And you?'},
    {id: 4, message: "It's React!"},
    {id: 5, message: 'Yo'},
  ]

  let dialogElements = dialogsData.map((dialogsItem) => (
    <DialogItem name={dialogsItem.name} id={dialogsItem.id} />
  ))

  let messagesElements = messagesData.map((messageItem) => (
    <Message message={messageItem.message} />
  ))

  return (
    <div className={classes.dialogs}>

      <div className={classes.dialogsItems}>
        {dialogElements}
      </div>

      <div className={classes.messages}>
        {messagesElements}
      </div>

    </div>
  )
}

export default Dialogs;