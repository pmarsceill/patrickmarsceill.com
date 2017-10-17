import Rellax from 'rellax'
import {lory} from 'lory.js'

const body = document.querySelector('body')

export default {
  init: ()=>{
    if (body.classList.contains('main-page')){
      const mql = window.matchMedia('(min-width: 768px)')
      let rellax = "";

      if (mql.matches) {
        console.log('true');
        rellax = new Rellax('.js-plx')
      }

      mql.addListener(function(mql) {
        if (mql.matches) {
          console.log('true');
          rellax = new Rellax('.js-plx')
        } else {
          if (typeof rellax != undefined) {
            rellax.destroy();
          }
        }
      })

      var sliderEl = document.querySelector('.js_slider')

      var slider = lory(sliderEl, {
        infinite: 1
      })

      setInterval(function () {
        slider.next();
      }, 3000 + 300); // Interval + Transition
    }
  }
}
