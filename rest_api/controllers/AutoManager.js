var auto = require('../models/auto');
const AutoManager = {};

AutoManager.getAll = (req, res, next) =>{
    auto.find({}, (error, autos)=>{
        if(error) return res.status(500).json({success: false, message:"Error interno del servidor"});

        if(autos)
        {
            return res.status(200).json({success: true, message:"Peticion de registros realizada con exito", autos});
        }
        else
        {
            return res.status(404).json({success: false, message:"No se encontraron registros"});
        }
    });
};

AutoManager.getAutotById = (req, res, next) =>{
    auto.findById(req.params.id, (error, autos)=>{
        if(error) return res.status(500).json({success: false, message:"Error interno del servidor"});

        if(autos)
        {
            return res.status(200).json({success: true, message:"Registro encontrado", autos});
        }
        else
        {
            return res.status(404).json({success: false, message:"No se encontro registro"});
        }
    });
};


AutoManager.create = (req, res, next) =>{

    let auto = new auto();
    auto.modelo = req.body.modelo;
    auto.marca = req.body.marca;
    auto.tipo_combustible = req.body.tipo_combustible;
    auto.tipo_auto = req.body.tipo_auto;
    auto.tipo_transmision = req.body.tipo_transmision;
    auto.anio = req.body.anio;

    student.save((error, auto)=>{
        if(error) return res.status(500).json({success: false, message:"Error interno del servidor"});

        if(auto)
        {
            return res.status(200).json({success: true, message:"Registro guardado correctamente en el sistema", auto});
        }
        else
        {
            return res.status(404).json({success: false, message:"Error al guardar el nuevo registro", auto});
        }
    });
};


AutoManager.update = (req, res, next) =>{

    var id = req.body.id;

    req.body.id = undefined;

    auto.findByIdAndUpdate(id, req.body, {new:true}, (error, auto)=>{
        if(error) return res.status(500).json({success: false, message:"Error interno del servidor"});

        if(student)
        {
            return res.status(200).json({success: true, message:"Registro actualizado con exito en el sistema", auto});
        }
        else
        {
            return res.status(404).json({success: false, message:"Error al actualizar registro"});
        }
    });
};

AutoManager.delete = (req, res, next) =>{

    var id = req.body.id;

    auto.findByIdAndDelete(id, (error, auto)=>{
        if(error) return res.status(500).json({success: false, message:"Error interno del servidor"});

        if(auto)
        {
            return res.status(200).json({success: true, message:"Registro eliminado con exito del sistema", auto});
        }
        else
        {
            return res.status(404).json({success: false, message:"Error al eliminar registro"});
        }
    });
};


module.exports = AutoManager;

