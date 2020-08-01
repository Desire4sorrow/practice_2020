var should = require('should');
var request = require('test');
var server = require('../../../app');

describe('api', function() {

  describe('Film_number', function() {

    describe('GET /film', function() {

      it('return base number', function(done) {

        request(server)
          .get('/film')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('First film!');

            done();
          });
      });

      it('should accept other param', function(done) {

        request(server)
          .get('/film')
          .query({ number: 'Second'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            res.body.should.eql('Second film!');

            done();
          });
      });
       });

  });

});
