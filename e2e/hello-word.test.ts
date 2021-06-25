import request from 'supertest';
import { app } from '../src/server';

describe('hello world', () => {
  const server = app.callback();

  it('returns Hello World!', async () => {
    const response = await request(server).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toMatchSnapshot();
  });
});
