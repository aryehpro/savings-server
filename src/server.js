const express = require('express');

const server = express();
const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server up on port ${port}`));

server.get('/', (req, res) => {
  res.send({ express: 'BACKEND IS UP! and watched' });
});
