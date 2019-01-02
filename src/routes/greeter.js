module.exports = {
  hello: function (req, res) {
    if(!req.body.name){
      res.send('this is an rror');
    }
  }
};