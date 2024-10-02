import express from 'express';

/**
 * Inject middlewares to the express app instance (api)
 * @param {Object} api - express app instance
 */
const injectMiddlewares = (api) => {
  api.use(express.json({ limit: '200mb' }));
};

export default injectMiddlewares;
