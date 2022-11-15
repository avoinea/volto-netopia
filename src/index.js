import netopiaMiddleware from './middleware/netopiaConfirm';
import NetopiaPay from './components/NetopiaPay';
import { netopiaSign } from './reducers';

const applyConfig = (config) => {
  // netopia.confirm express-middleware
  if (__SERVER__) {
    const express = require('express');
    config.settings.expressMiddleware = [
      ...(config.settings.expressMiddleware || []),
      netopiaMiddleware(express),
    ];
  }

  // Custom reducers
  config.addonReducers = {
    ...config.addonReducers,
    netopiaSign,
  };

  // Custom routes
  config.addonRoutes = [
    {
      path: '**/netopia.pay',
      component: NetopiaPay,
    },

    ...(config.addonRoutes || []),
  ];


  return config;
};

export default applyConfig;
