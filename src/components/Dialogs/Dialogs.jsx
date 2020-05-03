import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './Messages/DialogItem/DialogItem'
import Message from './Messages/Message/Message'
import TextArea from './Messages/TextArea/TextArea'

const Dialogs = (props) => {
  let dialogElements = props.state.dialogsData.map((dialogsItem) => (
    <DialogItem name={dialogsItem.name} id={dialogsItem.id} />
  ))

  let messagesElements = props.state.messagesData.map((messageItem) => (
    <Message message={messageItem.message} />
  ))

  return (
    <div className={classes.dialogs}>

      <div className={classes.dialogsItems}>
        {dialogElements}
      </div>

      <div className={classes.messages}>
        {messagesElements}
        <TextArea updateMessageArea={props.updateMessageArea} addMessage={props.addMessage}/>
      </div>
      
      
    </div>
  )
}

export default Dialogs;