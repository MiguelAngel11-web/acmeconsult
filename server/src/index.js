const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const {linuxConection,winConection,lnxConectionReplicate,winConectionReplicate}= require('./database')

//Initializations
const app = express();
const windroute = require('./routes/windows/routes');
const lnxroute = require('./routes/linux/routes');
const lnx_replic_route = require('./routes/lnxReplic/routes');
const win_replic_route = require('./routes/winReplic/routes');



//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/win', windroute);
app.use('/lnx', lnxroute);
app.use('/win/replic', win_replic_route);
app.use('/lnx/replic', lnx_replic_route);

//Puerto de conexion
app.set('port', process.env.PORT || 5000);


//Conexion bd
winConection.connect((err, res) => {
    if (err) {
        console.log(err)
        console.log('Error de conexion con sql')
        return;
    }
    console.log('Conexion exitosa a la base de datos de windows')
});
linuxConection.connect((err, res) => {
    if (err) {
        console.log(err)
        console.log('Error de conexion con sql')
        return;
    }
    console.log('Conexion exitosa a la base de datos de linux')
});
lnxConectionReplicate.connect((err, res) => {
    if (err) {
        console.log(err)
        console.log('Error de conexion con sql')
        return;
    }
    console.log('Conexion exitosa a la base de datos de windows desde Linux')
});
winConectionReplicate.connect((err, res) => {
    if (err) {
        console.log(err)
        console.log('Error de conexion con sql')
        return;
    }
    console.log('Conexion exitosa a la base de datos de linux desde Windows')
});

app.listen(app.get('port'), () => {
    console.log('Server on http://localhost:' + app.get('port'));
});