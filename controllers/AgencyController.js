import models from '../models';

export default {
    add: async (req,res,next) => {
        try{
            const reg = await models.Agency.create(req.body);
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
            const reg = await models.Agency.findOne({_id:req.query._id})
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
            const reg = await models.Agency.find({});
            res.status(200).json(reg)
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            })
            next(e);
        }
       
    },
    update: async (req,res,next) =>{
        try{
            const reg = await models.Agency.findByIdAndUpdate({_id:req.body._id},{
                name:req.body.name,
                address:req.body.address,
                legal_representative:req.body.legal_representative,
                rfc:req.body.rfc,
                email:req.body.email,
            })
            res.status(200).json(reg);
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            })
            next(e)
        }
      
    },

    activate: async(req,res,next)=>{
        try{
            const reg = await models.Agency.findByIdAndUpdate({_id:req.body._id},{status:0});
            res.status(200).json(reg)

        }catch(e){
            res.status(500).send({
                messaje:'Ocurrio un error'
            });
            next(e);
        }
    },
    deactivate: async(req,res,next)=>{
        try{
            const reg = await models.Agency.findByIdAndUpdate({_id:req.body._id},{status:1});
            res.status(200).json(reg)
        }catch(e){
            res.status(500).send({
                messaje:'Ocurrio un error'
            });
            next(e);
        }
    },
}