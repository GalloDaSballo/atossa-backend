"use strict";
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async findOne(ctx) {
    const { slug } = ctx.params;

    const poem = await strapi.services.farsi.findOne({ slug });
    const entities = await strapi.services.farsi.find();

    // removes current poem, since we don't want a poem that we are looking at to be
    // under more poems.

    const poems = entities.filter((poem) => poem.slug !== slug).slice(0, 2);

    return { poem, poems };
  },
};
