import rerenderEntireTree from "../render";

let state = {
  
  profilePage: {
    postData: [
      { id: 1, message: 'How are you?', likesCount: 12 },
      { id: 2, message: 'It my first post!!!', likesCount: 23 },
      { id: 3, message: 'Ha-hahaha', likesCount: 100 },
      { id: 4, message: 'WHAT???', likesCount: 5 },
    ],
    newPostText: 'Test text SERG',

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
    ]
  },

  sitebar: [
    { friendName: 'Yulia', photo: 'https://www.flaticon.com/premium-icon/icons/svg/522/522349.svg' },
    { friendName: 'Kolya', photo: 'https://image.flaticon.com/icons/png/512/177/177688.png' },
    { friendName: 'Sanya', photo: 'https://image.flaticon.com/icons/svg/145/145843.svg' },
  ]

}

export let addPost = () => {
  
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.postData.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state)
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state)
};

export default state;