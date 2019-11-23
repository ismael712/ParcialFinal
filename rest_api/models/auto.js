const Mongoose= require ("mongoose");

const AutoSchema = Mongoose.Schema({
    modelo: String,
    marca: String,
    tipo_combustible: String,
    tipo_auto: String,
    tipo_transmision : String,
    anio : Number
});

module.exports = Mongoose.model("Auto", AutoSchema);