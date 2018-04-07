
import {
  INIT_DATA,
  RESULT_MESSAGE,
  RESULT_SCORE,
  RESULT_TAKE,
  RESULT_DROP,
  RESULT_LOCATION,
  RESULT_DESTROY,
  RESULT_MONEY,
  RESULT_ROOM_DESC,
  RESULT_CREATE_EXIT,


} from '../actions'


export function gameData(state = {}, action) {
  console.log('find reduder for : ' + action.type);
  console.log('passed data ' + action.data);
  switch (action.type) {
    case INIT_DATA:
      return {
      
        gameTitle: action.data.gameTitle,
        score: action.data.score,
        money: action.data.money,
        room: action.data.room,
        lastMessage: action.data.lastMessage,
        discoveredPaths: action.data.discoveredPaths,
        move: action.data.move,
        rooms: action.data.rooms,
        actions: action.data.actions,
        objects: action.data.objects,
      }
    case RESULT_MESSAGE:
      return {
        ...state, lastMessage: action.data

      }
    case RESULT_SCORE:
      return {
        ...state, score: state.score + action.data
      }
    case RESULT_TAKE:
      const updatedObjects = state.objects.map((obj) => {
        action.data.forEach(element => {
          if (obj.obj == element) {
            obj.loc = 'INV'
          }
        });
        return obj;
      });
      return {
        ...state, objects: [...updatedObjects]
      }
    case RESULT_DROP:

      const droppedObjects = state.objects.map((obj) => {
        action.data.forEach(element => {
          if (obj.obj == element) {
            obj.loc = state.room;
          }
        });
        return obj;
      });
      return {
        ...state, objects: [...droppedObjects]
      }
    case RESULT_LOCATION:
      return {
        ...state, room: action.data
      }
    case RESULT_DESTROY:
      const updatedDestroyObjects = state.objects.map((obj) => {
        action.data.forEach(element => {
          if (obj.obj == element) {
            obj.loc = ''
          }
        });

        return obj;

      });
      return {
        ...state, objects: [...updatedDestroyObjects]
      }
    case RESULT_MONEY:

      return {
        ...state, money: state.money + action.data
      }
    case RESULT_ROOM_DESC:
      const rooms = state.rooms.map((r) => {
        if (r.id == state.room) {
          r.desc = action.data
        }
        return r;
      });
      return {
        ...state, rooms: [...rooms]
      }
    case RESULT_CREATE_EXIT:
      console.log(action.data);
      //{dir: "e", toRoom: "66"}
      const roomExits = state.rooms.map((r) => {
        if (r.id == state.room) {

          if (action.data.dir == 'e') {
            r.exits.e = action.data.toRoom;
          }
        }
        return r;
      });
      return {
        ...state, rooms: [...roomExits]
      }

    default:
      console.log('REDUCER DIDNT PROCESS [' + action.type + ']');
      return state
  }
}

