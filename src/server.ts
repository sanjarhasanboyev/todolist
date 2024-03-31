import express, { Express, urlencoded } from "express";
import userRoute from "./routes/user.routes"
import path from 'path';
import { engine } from "express-handlebars";

const server: Express = express();

server.use(express.json());
server.use(urlencoded({extended: true}));

// express-handlebars => engine settings
server.engine('hbs', engine({extname: '.hbs'}));
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

// catch route
server.use("/", userRoute);

// server
server.listen(8082, () => console.log("Server is running"));