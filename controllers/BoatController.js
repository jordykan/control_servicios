import models from '../models'

export default {
    add: async (req,res,next) =>{
        try{
            const reg = await models.Boat.create(req.body);
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
            const reg = await models.Boat.findOne({_id:req.query._id})
            if(!reg){
                res.status(404).send({
                    message:'El registro no existe'
                });
            }else{
                res.status(200).json(reg);
            }
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            })
        }
        next(e)

    },
    list: async(req,res,next)=>{
        try{
            const reg = await models.Boat.find({})
            .sort({'createdAt':-1})
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            });
            next(e);
        }
    

    },
    update: async (req,res,next) =>{
        try{
            const reg = await models.Boat.findByIdAndUpdate({_id:req.body._id},{
                name:req.body.name,
                type:req.body.type,
                flag:req.body.flag,
                eslora:req.body.eslora,
                puntal:req.body.puntal,
            })
        }catch(e){
            res.status(500).send({
                message:'error'
            })
        }
        next(e)

    },
    activate: async (req,res,next) =>{
        try{

        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            })
        }
        next(e)
    },
    deactivate: async (req,res,next) =>{
        try{
            
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error',
            })
        }
        next(e)

    }
}