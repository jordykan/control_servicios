import tokenService from '../services/token';
export default {
    verifyUsuario: async (req, res, next) => {
        if (!req, headers.token) {
            return res.status(404).send({
                message: 'No Token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador' || response.rol == 'Logistico' || response.rol == 'Comercial' || response.rol == 'Radio' || response.rol == 'Facturacion' || response.rol == 'Cliente') {
            next();
        }else{
            return res.status(403).send({
                message: 'No autorizado'
            })
        }
    },
    verifyAdministrador: async (req, res, next) => {
        if (!req.headers.token) {
            return res.status(404).send({
                message: 'No Token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador') {
            next();
        }else{
            return res.status(403).send({
                message: 'No autorizado'
            })
        }
    },
    verifyLogistico: async (req, res, next) => {
        if (!req, headers.token) {
            return res.status(404).send({
                message: 'No Token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Logistico' || response.rol == 'Administrador') {
            next();
        }else{
            return res.status(403).send({
                message: 'No autorizado'
            })
        }
    },
    verifyComercial: async (req, res, next) => {
        if (!req, headers.token) {
            return res.status(404).send({
                message: 'No Token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Comercial' || response.rol == 'Administrador') {
            next();
        }else{
            return res.status(403).send({
                message: 'No autorizado'
            })
        }
    },
    verifyRadio: async (req, res, next) => {
        if (!req, headers.token) {
            return res.status(404).send({
                message: 'No Token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador' || response.rol == 'Radio') {
            next();
        }else{
            return res.status(403).send({
                message: 'No autorizado'
            })
        }
    },
    verifyFacturacion: async (req, res, next) => {
        if (!req, headers.token) {
            return res.status(404).send({
                message: 'No Token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador' || response.rol == 'Facturacion' ) {
            next();
        }else{
            return res.status(403).send({
                message: 'No autorizado'
            })
        }
    },
    verifyCliente: async (req, res, next) => {
        if (!req, headers.token) {
            return res.status(404).send({
                message: 'No Token'
            });
        }
        const response = await tokenService.decode(req.headers.token);
        if (response.rol == 'Administrador' || response.rol == 'Cliente') {
            next();
        }else{
            return res.status(403).send({
                message: 'No autorizado'
            })
        }
    }

}