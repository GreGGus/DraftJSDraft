import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleImageEditor3 from './EditorColor.js'
import Editor from './components/Editor/EditorComponent.js'
import EditorDelete from './components/Editor/EditorDelete.js'
import "semantic-ui-css/semantic.min.css" 
import FaBeer from 'react-icons/lib/fa/beer';
import Mail from 'react-icons/lib/md/mail';
import DropdownExampleAllowAdditions from './components/DropdownStack.js'
import DatePicker from './components/DatePicker'


//import 'semantic-ui-css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Draft JS Draft :)</h2>
        </div>
          <EditorDelete />

        </div>
    );
  }
}

export default App;
