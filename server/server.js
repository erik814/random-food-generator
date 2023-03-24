const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use(routes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//test
app.use((req, res, next) => {
  console.log('Request received:', req.method, req.url);
  next();
});

app.use((req, res, next) => {
  console.log('Request body:', req.body);
  next();
});
//end test

if( process.env.NODE_ENV === 'production' ){
  app.use(express.static(path.join(__dirname, "../client/build")));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

db.once('open', () => {
  app.listen(PORT, () => console.log(`Now listening on localhost: ${PORT}`));
});
