import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './homepage';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Route exact to='/' component={Homepage}/>

          
        </BrowserRouter>
        


      </div>
    );
  }
}
