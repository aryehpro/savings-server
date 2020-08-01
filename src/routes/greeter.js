module.exports = {
  hello(req, res) {
    if (!req.body.name) {
      res.send('Error: name is a required parameter.');
    }
  },
};
