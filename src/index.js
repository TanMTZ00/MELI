const express = require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routers
app.use(require('./routes/index'));
app.use('/api/items', require('./routes/query'));

//se inicializa el server
app.listen(app.get('port'), () => {
    console.log(`Server running on port ${app.get('port')}`);
});

