import React from 'react';
import { render } from 'react-dom';
import { match } from 'react-router';
import 'antd/dist/antd.css';
import { install } from 'offline-plugin/runtime';
import RouterApp, { routes } from './routes';
import { history } from './store';
import '../styles/styles.scss';

const isProduction = process.env.NODE_ENV === 'production';
const node = document.getElementById('app');

match({ history, routes },
  (error, redirectLocation, renderProps) => { // eslint-disable-line
    if (error) {
      return console.error('Require.ensure error'); // eslint-disable-line
    }
    render(<RouterApp {...renderProps} />, node);
  });

if (isProduction) {
  install();
} else if (module.hot) {
  module.hot.accept('./routes', () => {
    const NewRouterApp = require('./routes').default; // eslint-disable-line
    render(<NewRouterApp />, node);
  });
}
