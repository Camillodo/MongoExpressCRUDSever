//REQUIRE
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const WilderController = require("./controllers/Wilders");

//APP
const app = express();

//PORT
const PORT = process.env.PORT || 6000;


//DB
mongoose.set('debug', true);
mongoose
  .connect(process.env.DATABASE_URL, {
    autoIndex: true
  })
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log(err));


// JSON USE
app.use(express.json());



//MAIN ROAD
app.get('/', (req, res) => {
  res.send("HEHEH BUAY")
})



// API ROUTES
app.post('/api/wilder', WilderController.create);
app.get('/api/wilder', WilderController.read);
app.put("/api/wilder", WilderController.update)
app.delete("/api/wilder", WilderController.delete)

app.use((req, res, next) => {
  res.status(404).send("NOT FOUND BABY")
})

//LISTEN
app.listen(PORT, () => console.log(`it's on port ${PORT} baby !`))