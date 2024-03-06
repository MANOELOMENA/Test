const axios = require('axios');
const { test, expect } = require('@jest/globals');

test('Busca por ID específico', async () => {
  const idEsperado = 1;
  const resposta = await axios.get(`https://omdbapi.com/${idEsperado}`);

  expect(resposta.status).toBe(200);
  expect(resposta.data.id).toBe(idEsperado);
});