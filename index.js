import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose'
import router from './routes'

//Conexión a la base de datos
mongoose.Promise = global.Promise;
const dbUrl = 'mongodb://localhost:27017/control_servicios_amls';
mongoose.connect(dbUrl,{useCreateIndex:true,useNewUrlParser: true,useUnifiedTopology: true})
.then(mongoose => console.log('conectando a la bd'))
.catch(err => console.log(err))


const app=express();
app.use(cors()); 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(morgan('dev'));
app.use('/api',router)
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'),()=>{
    console.log('Console on port'+app.get('port'));
})

