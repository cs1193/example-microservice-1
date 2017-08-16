'use strict';

export default {
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  HOST: process.env.HOST || '0.0.0.0',
  PORT: process.env.PORT || 3000,
  API_VERSION: process.env.API_VERSION || 1
};
