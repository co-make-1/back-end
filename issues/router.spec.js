const request = require('supertest')

const server = require('../api/server')

describe('issues router', function(){
    it('should run the tests', function() {
        expect(true).toBe(true)
    })


    describe('GET /', function() {
        it('should return 200 OK', function() {
            return request(server).get('/api/issues')
            .then(res => {
                expect(res.status).toBe(200);
            });
        });
        it('should return issues as the router value', function(){
            return request(server)
                .get('/api/issues')
                .then(res => {
                    expect(res.body.router).toBe('issues')
            });
        });
        /// async version of the test above ^
        it('should return issues as the router value', async function(){
            const res = await request(server).get('/api/issues');
                
            expect(res.body.router).toBe('issues');
        });
        it('should return JSON formatted body ', function(){
            return request(server)
                .get('/api/issues')
                .then(res => {
                    expect(res.type).toMatch(/json/)
            });
        });
    });
}); 