import dotenv from 'dotenv';
dotenv.config();
import app from './app.js';
import sequelize from './models/config.js';

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error starting server:', error);
  });
