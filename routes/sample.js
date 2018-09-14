const Router = require('koa-router');

// Import Services
const sampleService = require('../services/sample');

const router = new Router();

router.get('/samples', async ctx => {
    try {
        const allSamples = await sampleService.getAll();
        ctx.status = 201;
        ctx.body = allSamples;
    } catch (err) {
        console.log('Sample Route | Error getting all samples: ', err);
        ctx.status = 500;
        ctx.body = { error: err };
    }
});

router.get('/sample/:id', async ctx => {
    try {
        const { id } = ctx.params;
        const sample = await sampleService.getSample(id);

        ctx.status = 201;
        ctx.body = sample;
    } catch (err) {
        console.log('Sample Route | Error getting sample: ', err);
        ctx.status = 500;
        ctx.body = { error: err };
    }
})

module.exports = router;