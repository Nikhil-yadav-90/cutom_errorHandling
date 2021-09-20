const express = require('express');
const app = express();
require('dotenv').config();
const routes = require('./routes/index');



app.use("/api",[routes.test,routes.customeRoute]);





const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`App is Running on the Port ${PORT}`);
})