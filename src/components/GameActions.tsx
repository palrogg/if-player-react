import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ActionButton } from "../styled-constants";
import {
  //getRoomData,
  getAllowedActions,
} from "../utils/dataHelper";
import {
  resultSuccessRoll,
  resultMessage,
  resultScore,
  resultTake,
  resultDrop,
  resultLocation,
  resultDestroy,
  resultMoney,
  resultRoomDesc,
  resultCreateExit,
  restart
} from "../actions";

interface IProps {
  //rooms: Array<string>;
  //room: any;
  //objects:Array<string>;
  
  // money :number;
 // dispatch: Function;
}





const Actions: React.SFC<IProps> =() => {
  
  const dispatch = useDispatch();

  const objects:Array<string> = useSelector((state:any) => state.gameData.objects);
  const actions:Array<string> = useSelector((state:any) => state.gameData.actions);
  const room:any = useSelector((state:any) => state.gameData.room);
  const money:number = useSelector((state:any) => state.gameData.money);

   
  const handleAction = (action:string) => (e:any) => {
    e.preventDefault();

    //const { objects, actions, room, money } = this.props;

    const allowableActions = getAllowedActions(
      objects,
      actions,
      room,
      money
    ).map(action => {
      return action;
    });
    const results = allowableActions.filter(a => {
      return a.action === action;
    })[0].results;

    for (var key of Object.keys(results)) {
      dispatchResults(key, results[key]);
    }
  };
  const dispatchResults = (key:string, data:any)=> {
    
    switch (key) {
      case "createExitOnRollSuccess":
        const roll = Math.ceil(Math.random() * data.sides);

        //console.log(roll, data.sides);
        if (roll === data.sides) {
          dispatch(resultSuccessRoll(roll === data.sides));

         dispatch(resultCreateExit(data));

          //rollmMssage
          dispatch(
            resultMessage(
              "You rolled a " +
                roll +
                " from a " +
                data.sides +
                " sided dice. " +
                data.rollMessage
            )
          );
        } else {
          dispatch(
            resultMessage(
              "You rolled a " + roll + " from a " + data.sides + " sided dice. "
            )
          );
        }

        break;

      case "message":
        dispatch(resultMessage(data));
        break;
      case "take":
        dispatch(resultTake(data));
        break;
      case "drop":
       dispatch(resultDrop(data));
        break;
      case "changeScore":
        dispatch(resultScore(data));
        break;
      case "changeLocation":
        dispatch(resultLocation(data));
        break;
      case "destroys":
        dispatch(resultDestroy(data));
        break;
      case "addMoney":
        dispatch(resultMoney(data));
        break;
      case "removeMoney":
        dispatch(resultMoney(-data));
        break;
      case "changeRoomDesc":
        dispatch(resultRoomDesc(data));
        break;
      case "createExit":
        dispatch(resultCreateExit(data));
        break;
      case "restart":
        dispatch(restart());

        break;
      default:
        console.warn("WARNING result = [" + key + "] is not being processed!");
    }
  }
  

    //console.log('Actions rendered');
    //const { objects, actions, rooms, room, money } = this.props;
    //const currentRoomData = getRoomData(room, rooms);

    const allowableActions = getAllowedActions(
      objects,
      actions,
      room,
      money
    ).map(action => {
      return action.action;
    });

    return (
      <Fragment>
    
          {allowableActions.length > 0 &&
            allowableActions.map((action, index) => {
              return (
                <ActionButton  key={index} onClick={handleAction(action)}>
                  {action}
                </ActionButton >
              );
            })}
     
      </Fragment>
    );
  }


export default Actions;

