const { expect } = require('chai');
const { hello } = require('../../src/routes/greeter');

const req = {
  body: {},
};

const res = {
  sendCalledWith: '',
  send(arg) {
    this.sendCalledWith = arg;
  },
};

describe('Greeter route', () => {
  describe('hello() function', () => {
    it('Should respond with error if no name is given', () => {
      hello(req, res);
      expect(res.sendCalledWith).to.contain('error');
    });

    it('Should respond in English by default', () => {
      const testReq = req;
      testReq.body.name = 'Aryeh';

      hello(testReq, res);
      expect(res.sendCalledWith).to.equal('Hello, Aryeh!');
    });

    it('Should return an error for an unsupported language', () => {
      const testReq = req;
      testReq.body.name = 'Aryeh';
      testReq.body.language = 'Jaberwakee';

      hello(testReq, res);
      expect(res.sendCalledWith).to.equal('Error: Unsupported language');
    });
  });
});
