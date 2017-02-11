import React from 'react';
import ReactDOM from 'react-dom';
import routes from './Routes/routes.js';

import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js';


class App extends React.Component{
  render(){
    return(
      <div className="app" >
        {routes}
      </div>
    );
  }
}


ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
