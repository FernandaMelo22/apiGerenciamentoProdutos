const express = require('express');
const app = express();
const { sequelize } = require('./models');
require('dotenv').config();

app.use(express.json());

const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/api', categoryRoutes);
app.use('/api', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.sync();
  console.log('Database synced');
});
