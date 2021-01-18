import mongoose, {Schema} from 'mongoose';

const serviceSchema = new Schema({

    boat: {type:Schema.ObjectId, ref: 'boat',required:true },
    agency: {type:Schema.ObjectId, ref: 'agency',required:true},
    muelle: {type:String, required:true},
    onHire : {type:Schema.ObjectId, ref: 'ohhire'},
    ofHire: {type:Schema.ObjectId, ref: 'ofhire'},
    movimiento: {type:Schema.ObjectId,ref: 'movimiento'},
    onHireTentativo : {type:Date, required:true},
    program : {type:String, required:true},
    detail: {type:String, required:true}
    
})

const service = mongoose.model('service',serviceSchema)
export default service;