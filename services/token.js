import jwt from 'jsonwebtoken';
import model from '../models';
async function checkToken(token){
    let __id = null;
    try{
        const {_id} = await jwt.decode(token);
        __id = _id;
    }catch(e){
        return false;
    }
    const user = await model.Usuario.findOne({_id:__id,estado:0});
    if(user){
        const token = jwt.sign({_id:__id},'arrow15432',{expiresIn:'1d'})
        return {token,rol:user.rol};
    }else{
        return false;
    }
}
export default {
    encode: async (_id) => {
        const token = jwt.sign({_id:_id},'arrow15432',{expiresIn:'1d'});
        return token;
    },
    decode: async(token) => {
        try {
            const {_id} = await jwt.verify(token,'arrow15432')
            const user = await model.Usuario.findOne({_id,estado:0})
            if(user){
                return user
            }else{
                return false;
            }
        }catch(e){
            const newToken = await checkToken(token)
            return newToken;
        }   
    }
}