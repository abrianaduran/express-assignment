const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app'); 

describe('GET /apps endpoint', () => {
    it('should return a list of apps from GET /apps', () => {
        return supertest(app)
        .get('/')
        .expect(200, results);
    });
    it('should return filter the lsit by the given value of genre', () => {
        const query = 'Arcade'

        return supertest(app)
        .get('/')
        .query(query)
        .expect(200)
        .
    })
    it('should result in an error if genre value is not on the lsit provided', () => {

    })
    it('should sort list by rating when rating value is provided', () => {

    })
    it('should result in an error if any other value is provided', () => {

    })
    it('should sort list by app when app value is provided ', () => {
        return supertest(app)
    })
    it 
});