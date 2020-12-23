import request from 'supertest'

import app from '../src/server'

describe('Test routing',() => {
  it('should return 200', async () => {
    const result = await request(app).get('/')
    expect(result.status).toEqual(200)
  })
})
