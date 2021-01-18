import models from '../models';
import bcrypt from 'bcryptjs';
import token from '../services/token';


export default {
    add: async (req,res,next) => {
        try{
            req.body.password = await bcrypt.hash(req.body.password,10)
            const reg = await models.Usuario.create(req.body);
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
            const reg = await models.Usuario.findOne({_id:req.query._id});
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
            const reg = await models.Usuario.find({});
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
            let pass = req.body.password;
            const reg0 = await models.Usuario.findOne({_id:req.body._id});
            if(pass !=reg0.password){
                req.body.password = await bcrypt.hash(req.body.password,10)
            }
            const reg = await models.Usuario.findByIdAndUpdate({_id:req.body._id},{
                rol:req.body.rol,
                nombre:req.body.nombre,
                telefono:req.body.telefono,
                email:req.body.email,
                empresa:req.body.empresa,
                password:req.body.password
            })
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            })
        }
        next(e)
    },
    login: async(req,res,next) =>{
        try{
            let user = await models.Usuario.findOne({email:req.body.email});
            if(user){
                let match = await bcrypt.compare(req.body.password,user.password);
                if(match){
                    let tokenReturn = await token.encode(user._id);
                    res.status(200).json({user, tokenReturn});
                }else{
                    res.status(404).send({
                        message:'Password Incorrecto'
                    })
                }
            }else{
                res.status(404).send({
                    message:'No existe el usuario'
                })
            }
        }catch(e){
            res.status(500).send({
                message:'Ocurrio un error'
            })
        }
        next();
    }
}