// types act
import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import * as types from '../actions/ActionTypes.js';


// reducer pingButton.
const pingButton = (state={},action) => {
  switch (action.type) {
        case types.PING_BUTTON_OK:
          return (
            Object.assign({}, state, {
              isPing : action.isPing,
              data :action.data,
              counter: state.counter +1
                  })
           );
        default:
          return state;
  }
}

// Reducer pingManinthemiddle APRES avoir fait l'action
const pingManinthemiddle =(state={},action) => {
  console.log("JE PASSE DANS LE REDUCUER")

  switch (action.type) {
    case types.PING_MANINTHEMIDDLE_OK:
      console.log("reduceur qui modifie l'état")
      console.log(action.isData)
      return(
        Object.assign({},state,{
          data:action.data,
          isData:action.isData
        })

      );
      break;
      default:
        return state;

  }
}


// reducer hideButton.
const hideButton =(state={},action) => {
  switch (action.type) {
    case 'hide':
      break;
    default:
    return state;
  }
}

// combineReducers.
const reducers = combineReducers({
  hideButton:hideButton,
  pingButton:pingButton,
  pingManinthemiddle:pingManinthemiddle
});


export default reducers;
