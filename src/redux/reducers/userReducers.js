const defaultState = {
  user: null
};

export default (state = defaultState, action) => {

  if(action.type === 'SET_USER_INFO'){
    return {
      ...state,
      user: action.user
    };
  }

  return state;
};