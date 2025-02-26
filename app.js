const express = require("express");
const connectToDb = require("./config/db"); //module export from db.js
const morgan = require("morgan"); // for login
const {engine} = require('express-handlebars')

const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

connectToDb();

const PORT = process.env.PORT || 5000;

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));

}


app.engine('.hbs', engine());
app.set('view engine', '.hbs');
app.set('views', './views');

// Route
app.use("/", require('./routes/index'));


app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});



































































// const express = require("express");
// const connectToDb = require("./config/db"); //module export from db.js
// const morgan = require("morgan"); // login

// const exphbs = require(`express-handlebars`);

// // const {create} = require('express-handlebars')
// // const hbs = create ({
// //     defaultLayout: 'main',
// //     extname:'.hbs'
// // })

// const dotenv = require("dotenv");
// //!load config
// dotenv.config({ path: "./config/.env" });

// console.log(exphbs);
// connectToDb();
// //enviroment varaibles
// const PORT = process.env.PORT || 5000;

// const app = express();

// //!logging
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
//   //!runs only in devleopment mode, shows http models
// }

// //!  **middleware - setting up view engine(handleBars)
// // app.use(express.urlencoded({ extended: false }));
// // app.use(express.json());
// app.engine(".hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
// //app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
// app.set("view engine", ".hbs");

// //Route
// app.use("/", require("./routes/index"));

// app.listen(PORT, () => {
//   console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
// });
