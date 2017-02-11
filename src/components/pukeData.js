import React, { Component } from 'react';





// Show Json
function puke (object){
  return <pre>{  JSON.stringify(object,null,' ')} </pre>
}

function Maninthemiddle(props){
  return(
  <div>

    <h1> Data news </h1>
      {puke(props.data)}
   </div>
  );

}

export default Maninthemiddle;
