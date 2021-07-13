const express = require('express');
const app = express()
const morgan = require('morgan')

//settings
app.set('port', process.env.PORT || 4000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}))
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send("La ruta para obtener los tickets es /tickets")
})
app.use(require('./routes/ticketsRouter'));

//iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});