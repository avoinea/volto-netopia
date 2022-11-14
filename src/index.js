import netopiaMiddleware from './middleware/netopiaConfirm';

const applyConfig = (config) => {
  // netopia.confirm express-middleware
  if (__SERVER__) {
    const express = require('express');
    config.settings.expressMiddleware = [
      ...(config.settings.expressMiddleware || []),
      netopiaMiddleware(express),
    ];
  }

  return config;
};

export default applyConfig;
