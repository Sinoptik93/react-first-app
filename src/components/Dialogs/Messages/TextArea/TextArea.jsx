import React from 'react'
import classes from './TextArea.module.css'
import { updateMessageArea } from '../../../../redux/state';

const TextArea = (props) => {
  let newMessageArea = React.createRef();

  let addMessage = () => {
    let text = newMessageArea.current.value;
    props.addMessage(text);
    newMessageArea.current.value = ''
  }

  let onPostChange = () => {
    let text = newMessageArea.current.value;
    updateMessageArea(text)
  }

  return (
    <div>
      <div className={classes.textArea}>
        <textarea onChange={ onPostChange } ref={newMessageArea} value={props.newMessageText} />
        <div>
          <button onClick={addMessage}>Отправить</button>
        </div>
      </div>
    </div>
  )
}

export default TextArea;