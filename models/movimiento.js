import mongoose, {Schema} from 'mongoose';

const movimientoSchema = new Schema({
    service: {type:Schema.ObjectId,required:true},
    movimiento:[{
        time:{type:String,required:true},
        movementType:{type:String,required:true},
        eta:{type:Date},
        passengers:{type:Number},
        material:{type:String}
    }]
})

const movimiento = mongoose.model('movimieto',movimientoSchema);
export default movimiento;