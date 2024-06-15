require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const remainderRoutes = require('./routes/remainder');

connection();

app.use(express.json())
app.use(cors(
    {
        origin:["https://qriocity-assessment-local.vercel.app"],
        methods:["GET","POST","PUT","DELETE"],
        credentials:true
    }
));

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/profile",profileRoutes);
app.use("/api/remainder",remainderRoutes);

const port = process.env.PORT || 4000;
app.listen(port,() => console.log(`Listening on port ${port}...`))