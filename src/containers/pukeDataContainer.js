import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Maninthemiddle from '../components/maninthemiddle/Maninthemiddle.js';
import githubHelpers from '../utils/GithubHelpers.js';
import LinearProgress from 'material-ui/LinearProgress';
import pingManinthemiddle from '../actions/buttonActions.js'
import { connect } from 'react-redux';
import store from '../reducers/store.js';


class ManinthemiddleContainer extends React.Component{
  componentWillMount(){
    console.log("willMount")
    store.dispatch(pingManinthemiddle());
  }
  render(){
    console.log("Render ici");
    console.log(this.props.data);

// do not delete.
  //  {this.props.data.map(function (data){
  //    return <Maninthemiddle data={data} />
  //  }.bind(this)
  //)}

  if (this.props.isData){
      return(
      <div>
        <LinearProgress mode="indeterminate" />
             {this.props.data.map(function (data){
              return <Maninthemiddle data={data} />
            }.bind(this)
          )}
      </div>
      //  <Maninthemiddle dataNews={this.state.dataNews} />
      );
    }else{
      return(
      <div>
        <LinearProgress mode="indeterminate" />
             {this.props.data}
      </div>
      );

    }
    }
}


const mapStateToProps = function(store) {
  return {
    data : store.pingManinthemiddle.data,
    isData: store.pingManinthemiddle.isData
  };
}

// export et connect to redux
export default connect(mapStateToProps)(ManinthemiddleContainer);
