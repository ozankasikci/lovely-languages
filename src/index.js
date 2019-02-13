/* Import all vendor.scss / css here[e.g. Import 'font-awesome/scss/font-awesome.scss';] */
import { Routes, DefaultRoute } from './view/routes';
import initCalls from './init-calls';


import { configure as mobxConfigure } from 'mobx';
mobxConfigure({ enforceActions: 'observed' });



/* Include global app styles here, so that it will over ride component's css styles*/
import './app.scss';

if (module.hot) {
  module.hot.accept();
}


if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

initCalls();

// Wire up mithril app to DOM
const $root = document.body.querySelector('#root');
m.route($root, DefaultRoute, Routes);





