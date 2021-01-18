import mongoose,{Schema} from 'mongoose'
 
const boatSchema = new Schema({
    name:{type:String,required:true},
    shipowner:{type:String,required:true},
    draft:{type:Number,required:true},
    type:{type:String,required:true},
    flag:{type:String,required:true},
    imo:{type:String, required:true},
    createdAt:{type:Date, default:Date.now},
    status:{type:Number, default:0}
})

const Boat = mongoose.model('boat',boatSchema);
export default Boat;