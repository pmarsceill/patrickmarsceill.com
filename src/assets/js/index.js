/**
 * Main.js
 * Client-Side JS Bootsrap
 * Loads pages and components
 */
import Pages from './pages/index.js';

import '../sass/pm.scss';

function init(){
  Pages.init();
}

document.addEventListener('DOMContentLoaded', (event)=> { init(); });
