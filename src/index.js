import 'ace-builds/src-min-noconflict/ace';
import { Routes, DefaultRoute } from './view/routes';

const CDN = 'https://cdn.jsdelivr.net/npm/ace-builds@1.4.2/src-min-noconflict';
ace.config.set('basePath', CDN);
ace.config.set('modePath', CDN);
ace.config.set('themePath', CDN);
ace.config.set('workerPath', CDN);

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

// Wire up mithril app to DOM
const $root = document.body.querySelector('#root');
m.route($root, DefaultRoute, Routes);





