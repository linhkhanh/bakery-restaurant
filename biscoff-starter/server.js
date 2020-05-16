const express = require('express');
const app = express();
const port = 5000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

require('./routes')(app);

app.listen(port, () => {
  console.log(`Biscoff Bakery app listening on port: ${port}`)
});
