const request = require('supertest');
const app = require('../src/app');
const truncate = require('./helper/truncate');

describe('Session', () => {

  beforeEach(async () => {
    await truncate();
  });

  it('should be created session', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'Diego',
        email: 'diego1@teste.com',
        password: '1234'
      });

    const response = await request(app)
      .post('/session')
      .send({
        email: 'diego1@teste.com',
        password: '1234',
      });

    expect(response.body).toHaveProperty('token');
  });

  it('should be email or password not match', async () => {
    const response = await request(app)
      .post('/session')
      .send({
        email: 'teste@teste.com',
        password: '1234',
      });

    expect(response.status).toBe(404);
  });
});
