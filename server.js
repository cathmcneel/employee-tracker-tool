const express = require('express');
// const db = require('./db/connection');
// const apiRoutes = require('./routes/apiRoutes');
// const inputCheck = require('../../utils/inputCheck');
const router = express.Router();
const PORT = process.env.PORT || 3001;
const app = express();


// ADD an Employee


// // Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// // Use apiRoutes
// app.use('/api', apiRoutes);

// // Default response for any other request (Not Found)
// app.use((req, res) => {
//   res.status(404).end();
// });


//NPM server 
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });


// Start server after DB connection
// db.connect(err => {
//   if (err) throw err;
//   console.log('Database connected.');
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });

module.exports = router;