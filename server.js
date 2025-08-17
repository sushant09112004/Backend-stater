const expresss = require('express');
const app = expresss();
const port = process.env.port || 3000;

const routes = require('./routes');
app.use(expresss.json());
app.use('/api', routes);

//start the server 
//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen (port , () =>{
    console.log(`server is running of ${port} `)
})