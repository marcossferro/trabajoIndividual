const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require('method-override');

const notitasRouter = require("./routes/notitasRouter"); 

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", notitasRouter);


let puerto = 3000;
app.listen(puerto, function(){
    console.log('El servidor esta corriendo en el puerto '+ puerto);
    console.log("http://localhost:3000")
});