const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');


mongoose
  .connect("mongodb://localhost:27017/db1", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));



// const testTour=new Tour({
//   name:"Hyderabad",
//   rating:5.0,
//   price:150
// });

// testTour.save().then(doc =>{
//   console.log(doc);
// }).catch(err =>{
//   console.log("ERROR" ,err);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});