import express from "express";
import ejs from "ejs";
const app = express();

import inicioRoutes from "./routes/inicioRoutes.js";
import empresaRoutes from "./routes/empresaRoutes.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.engine('ejs', ejs.__express);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
    }
);


app.use(inicioRoutes);
app.use(empresaRoutes);