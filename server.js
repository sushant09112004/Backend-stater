const expresss = require('express');
const app = expresss();
const port = process.env.port || 3000;

const routes = require('./routes');
app.use(expresss.json());
app.use('/api', routes);

//start the server 

app.listen (port , () =>{
    console.log(`server is running of ${port} `)
})