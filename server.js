require('dotenv').config();
const app = require('./src/app')
const connectToDb = require('./src/config/database')


connectToDb();




app.listen(PORT, '0.0.0.0', () => {
    console.log(`server is running on port ${PORT}`);
}); 
  