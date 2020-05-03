const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_MESSAGE_AREA = 'UPDATE-MESSAGE-AREA';
const ADD_MESSAGE = 'ADD-MESSAGE';

let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: 'How are you?', likesCount: 12 },
        { id: 2, message: 'It my first post!!!', likesCount: 23 },
        { id: 3, message: 'Ha-hahaha', likesCount: 100 },
        { id: 4, message: 'WHAT???', likesCount: 5 },
      ],
      newPostText: '',
  
    },
  
    dialogsPage: {
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
    },
  
    sitebar: [
      { friendName: 'Yulia', photo: 'https://www.flaticon.com/premium-icon/icons/svg/522/522349.svg' },
      { friendName: 'Kolya', photo: 'https://image.flaticon.com/icons/png/512/177/177688.png' },
      { friendName: 'Sanya', photo: 'https://image.flaticon.com/icons/svg/145/145843.svg' },
    ]
  },
  _callSubscriber() {
    console.log('state is change');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type ===  ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_MESSAGE_AREA) {
      this._state.dialogsPage.newMessageText = action.newText;
    this._callSubscriber(this._state);

    } else if (action.type === ADD_MESSAGE ) {
      let newMessage = {
        id: 6,
        message: this._state.dialogsPage.newMessageText
      }
      this._state.dialogsPage.messagesData.push(newMessage);
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () =>  ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => 
({ type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () =>  ({type: ADD_MESSAGE});
export const updateMessageAreaCreator = (text) => 
({ type: UPDATE_MESSAGE_AREA, newText: text});

export default store;
window.store = store;