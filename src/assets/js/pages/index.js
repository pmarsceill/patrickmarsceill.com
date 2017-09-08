import React from 'react';
import ReactDOM from 'react-dom';
import Rellax from 'rellax'

import Example from '../components/example';
import Home from './home.js';


const body = document.querySelector('body')

export default {
  init: ()=>{
    if (body.classList.contains('main-page')){
      // ReactDOM.render(<Example />, document.getElementById('react__root'));
      var rellax = new Rellax('.js-plx');
      Home.init();
    }
  }
}
