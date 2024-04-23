const express = require("express");

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');


const test = require("./middleware")

app.get("/test",test, async (req, res) => {
  try {
    
    res.status(200).json({ message: "ok" });
  } catch (error) {
    res.status(500).json(error);
  }
});


app.get('/', (req, res) => {
    // Render the 'index.ejs' template and pass data to it
    res.render('index', { title: 'Hello World', message: 'Welcome to my website!' });
  });
  

app.listen(4444, () => {
  console.log("server is up on 4444");
});
