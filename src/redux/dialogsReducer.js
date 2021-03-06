const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const initialState = {
  dialogs: [
    {id: 1, name: 'Victor'},
    {id: 2, name: 'Archi'},
    {id: 3, name: 'Igor'},
    {id: 4, name: 'Andrey'},
    {id: 5, name: 'Artem'},
    {id: 6, name: 'GUEST'}
  ],
  messages: [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo!Yo!'},
  ],
  newMessageText: 'enter message'
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE:
      return {...state, messages: [...state.messages, {id: 6, message: state.newMessageText}], newMessageText: ''}

    case UPDATE_NEW_MESSAGE_TEXT:
      return {...state, newMessageText: action.body}

    default:
      return {...state};
  }
}

export const addMessageAC = () => ({type: ADD_MESSAGE});
export const updateNewMessageAC = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body});

export default dialogsReducer;