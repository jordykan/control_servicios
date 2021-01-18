import mongoose, {Schema, Shema} from 'mongoose'

const AgencySchema = new Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    lega_representative:{type:String,required:true},
    rfc:{type:String,required:true},
    email:{type:String,required:true}
})

const Agency = mongoose.model('agency',AgencySchema);
export default Agency