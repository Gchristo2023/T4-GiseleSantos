// test.js
const { spec } = require('pactum');

it('Atualizando dados', async () => {
  await spec()
    .put('https://api.thecatapi.com/v1/images/search?limit=10')
    .expectStatus(401);
});