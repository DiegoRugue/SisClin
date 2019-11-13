const request = require('supertest');
const app = require('../src/app');
const truncate = require('./helper/truncate');

describe('User', () => {

  beforeEach(async () => {
    await truncate();
  });

  it('should be created user', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Diego',
        email: 'diego@teste.com',
        password: '1234'
      });

    expect(response.body).toHaveProperty('id');
  });

  it('should be email already registered', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'Diego',
        email: 'diego@teste.com',
        password: '1234'
      });

    const response = await request(app)
      .post('/users')
      .send({
        name: 'Diego',
        email: 'diego@teste.com',
        password: '1234'
      });

    expect(response.status).toBe(400);
  });

});
