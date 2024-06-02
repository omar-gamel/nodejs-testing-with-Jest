const add = (a, b) => {
  return a + b;
};

const err = () => {
  throw new Error('There are new error.');
};

const promiseTest = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a - b >= 1) resolve('+ve');
    else reject('-ve');
  });
};

const arr = () => {
  return ['Bat'];
};

const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/users', (req, res) => {
  res.json({
    users: [{ name: 'Test', email: 'Test@Test.com', password: 'Test' }]
  });
});

app.listen(300, () => console.log('Run On Port 300'));

module.exports = { add, err, promiseTest, arr, app };
