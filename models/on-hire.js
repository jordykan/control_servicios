import mongoose, {Schema} from 'mongoose';

const onHireSchema = new Schema({
    service:{type:Schema.ObjectId, required:true},
    diesel:{type:Number,required:true},
    oil1:{type:Number,required:true},
    oil2:{type:Number},
    hydraulic:{type:Number},
    gear_oil:{type:Number},
    water:{type:Number, required:true},
    other:{type:String},
    onHire:{type:Date,required:true},
    dock:{type:String,required:true},
    details:{type:String,required:true}
}) 

const onHire = mongoose.model('onHire',onHireSchema);
export default onHire;