const expect = require('chai').expect;
const { hello } = require('../../src/routes/greeter');

let req = {
  body : {}
};

let res = {
  sendCalledWith: '',
  send: function (arg) {
    this.sendCalledWith = arg;
  }
};

describe('Greeter route', () => {
  describe('hello() function', () => {
    it('Should respond with error if no name is given', () => {
      hello(req, res);
      expect(res.sendCalledWith).to.contain('error');
    });
  });
});