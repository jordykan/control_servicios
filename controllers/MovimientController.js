import models from '../models';

export default {
    add: async (req,res,next) => {
        try{
            const reg = await models.Movimiento.create(req.body);
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    },
    query: async (req,res,next) =>{
        try{
            const reg = await models.Movimiento.findOne({_id:req.query._id});
            res.status(200).json(reg)
        }catch(e){
            res.status(500).send({
                message:'ocurrio un error'
            });
            next(e);
        }
    },
    list: async (req,res,next) =>{
        try{
            const reg = await models.Movimiento.find({});
            res.status(200).json(reg)
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            })
        }
        next(e);
    },
    update: async (req,res,next) =>{
        try{
           
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            })
        }
        next(e)
    }
}