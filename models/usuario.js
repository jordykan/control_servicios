import mongoose, {Schema} from 'mongoose';

const usuarioSchema = new Schema({
    rol: {type:String,required:true},
    nombre : {type:String, required:true},
    telefono : {type:String, required:true},
    email : {type:String,requierd:true,maxlength:50,unique:true},
    empresa: {type:String,required:true},
    password: {type:String, maxlength:64,required:true},
    estado: {type:Number, default:1},
    createdAt: {type: Date, default: Date.now}
})

const usuario = mongoose.model('usuario',usuarioSchema);
export default usuario;