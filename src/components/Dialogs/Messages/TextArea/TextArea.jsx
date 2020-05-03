import React from 'react'
import classes from './TextArea.module.css'
import {updateMessageAreaCreator, sendMessageCreator} from '../../../../redux/state';

const TextArea = (props) => {
  let newMessageArea = React.createRef();

  let addMessage = () => {
    props.dispatch(sendMessageCreator());
    newMessageArea.current.value = '';
  }

  let onPostChange = () => {
    let text = newMessageArea.current.value;
    props.dispatch(updateMessageAreaCreator(text));
  }

  return (
    <div>
      <div className={classes.textArea}>
        <textarea onChange={onPostChange} ref={newMessageArea} value={props.newMessageText} placeholder='Enter message' />
        <div>
          <button onClick={addMessage}>Отправить</button>
        </div>
      </div>
    </div>
    
  )
}

export default TextArea;