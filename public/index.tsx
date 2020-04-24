import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './app';
import { helloWorld } from '~lib';

console.log('App started: ' + Date.now());

helloWorld();

ReactDOM.render(<App />, document.getElementById('app'));