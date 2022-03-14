const express = require('express');

require('dotenv').config();

const bodyParser = require('body-parser');
const {
  joiError,
  domainError,
  error,
} = require('./middlewares');

const { products } = require('./controllers/productsController');
const { sales } = require('./controllers/salesController');

const app = express();

app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send();
});
// run
app.use('/products', products);
app.use('/sales', sales);

app.use(joiError);
app.use(domainError);
app.use(error);

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});