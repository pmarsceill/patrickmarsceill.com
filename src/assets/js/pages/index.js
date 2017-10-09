import Rellax from 'rellax'

const body = document.querySelector('body')

export default {
  init: ()=>{
    if (body.classList.contains('main-page')){
      var rellax = new Rellax('.js-plx');
    }
  }
}
