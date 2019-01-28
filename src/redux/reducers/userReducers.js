const defaultState = {
  user: {
    desc: null,
    docId: null,
    email: null,
    favRoutes: [],
    id: null,
    lastName: null,
    name: null,
    image: null,
    uid: null,
  }
};

export default (state = defaultState, action) => {

  if(action.type === 'SET_USER'){
    return {
      ...state,
      user: action.user
    };
  }

  return state;
};