import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sitebarReducer from "./sitebarReducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sitebar= sitebarReducer(this._state.sitebar, action)

    this._callSubscriber(this._state);
  }
  
}


export default store;
window.store = store;