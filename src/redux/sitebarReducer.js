let initialState= {
  sitebar: [
    { friendName: 'Yulia', photo: 'https://www.flaticon.com/premium-icon/icons/svg/522/522349.svg' },
    { friendName: 'Kolya', photo: 'https://image.flaticon.com/icons/png/512/177/177688.png' },
    { friendName: 'Sanya', photo: 'https://image.flaticon.com/icons/svg/145/145843.svg' },
  ]
}

const sitebarReducer = (state = initialState, action) => {
  return state;
}

export default sitebarReducer;