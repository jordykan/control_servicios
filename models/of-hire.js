import mongoose, {Schema} from 'mongoose';

const ofHireSchema = new Schema({
    service:{type:Schema.ObjectId, required:true},
    diesel:{type:Number,required:true},
    oil1:{type:Number,required:true},
    oil2:{type:Number},
    hydraulic:{type:Number},
    gear_oil:{type:Number},
    water:{type:Number, required:true},
    other:{type:String},
    ofHire:{type:Date,required:true},
    dock:{type:String,required:true},
    details:{type:String,required:true}
}) 

const ofHire = mongoose.model('ofhire',ofHireSchema);
export default ofHire;