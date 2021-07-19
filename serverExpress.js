/// Ejemplo de servidor con express

const express = require('express');
const colors = require('colors');
const morgan = require('morgan');

const app = express();

// function logger(req, res, next) {
//     console.log(`Ruta recivida: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// }

// Settings
app.set('appName', 'Brauny Express Curso');
app.set('port', 5000);
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
//app.use(logger);
app.use(morgan('dev'));

// Rutas
app.get('/', (req, res) => {
    const data = [{name: 'Bruno'},{name: 'Jose'},{name: 'Franco'}]
    res.render('index.ejs', {people: data});
});

app.get('/user', (req, res) => res.json({
    username: "brauny",
    lastname: "Rangel"
}));

app.post('/user/:uid', (req, res) => {
    console.log(req.body);
    console.log(req.params);
    res.send('Usuario')
});

app.post('/about', (req, res) => res.send('Acerca de mí'));

app.put('/info', (req, res) => res.send('información'));

app.put('/user/:uid', (req, res) => {
    console.log(req.body);
    res.send(`Usuario ${req.params.uid} actualizado`)
});

app.delete('/contact', (req, res) => res.send('Contacto'));

app.delete('/user/:uid', (req, res) => {
    res.send(`Usuario ${req.params.uid} eliminado`)
});

app.use(express.static('public')); // Esta es la ruta que se cambia con el middleware

app.listen(app.get('port'), () => {
    console.log(app.get('appName'));
    console.log('Server en puerto', app.get('port'));
});