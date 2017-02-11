import combineReducer from '../reducers/application.js'
import { createStore,applyMiddleware,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { mySaga } from '../middleware/saga.js';




// etat initial;
const initialState =(
  {
  pingButton:
      {
      isPing :false,
      data:'noData',
      counter:0
    },
    pingManinthemiddle:
    {
      data:[],
      isData:false
    }
  }

);

//export avec thunk
//const store= compose(applyMiddleware(thunk))(createStore)(combineReducer,initialState);



// export saga
const sagaMiddleware=createSagaMiddleware();
const store = createStore(
  combineReducer,
  initialState,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga);

export default store;


//export default store;
