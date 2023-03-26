'use strict';

/**
 * client-visit service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::client-visit.client-visit');
