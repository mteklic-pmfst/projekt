const request = require('supertest');
const app = require('../app');

describe('POST /getuserbooking', () => {
  it('should respond with a 400 status code for missing userid', async () => {
    const response = await request(app).post('/getuserbooking');
    expect(response.statusCode).toBe(404);
    
  });
});
