export function homedata(state=[],action){
  switch(action.type){
    case 'GET_DATA':
      return action.payload;
      break;
    default:
    return state;
  }
}
