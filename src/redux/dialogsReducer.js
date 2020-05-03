const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
  messagesData: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Fine! And you?' },
    { id: 4, message: "It's React!" },
    { id: 5, message: 'Yo' },
  ],
  dialogsData: [
    { id: 1, name: 'Max' },
    { id: 2, name: 'Evgen' },
    { id: 3, name: 'Serj' },
    { id: 4, name: 'Svetlana' },
    { id: 5, name: 'Alexander' },
    { id: 6, name: 'Konstatntin' },
  ],
  newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_MESSAGE_AREA:
      state.newMessageText = action.newText;
      return state;
    case ADD_MESSAGE:
      let newMessage = {
        id: 6,
        message: state.newMessageText,
      }
      state.messagesData.push(newMessage);
      return state;
    default:
      return state;
  }
}

export const sendMessageCreator = () =>  ({type: ADD_MESSAGE});
export const updateMessageAreaCreator = (text) => 
({ type: UPDATE_MESSAGE_AREA, newText: text});

export default dialogsReducer;