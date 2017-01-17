import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleImageEditor from './Editor.js'
import SimpleImageEditor2 from './Editor2.js'
import SimpleImageEditor3 from './EditorColor.js'



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Draft JS Draft :)</h2>
        </div>
          <SimpleImageEditor3 />
      </div>
    );
  }
}

export default App;
