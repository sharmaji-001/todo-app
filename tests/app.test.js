const request = require('supertest');
const app = require('../app'); // Make sure this path is correct

test('Sample test', async () => {
    const response = await request(app).get('/'); // Make a GET request to the root URL
    expect(response.text).toBe('Hello, To-Do List!'); // Check the response
});
