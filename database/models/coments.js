module.exports = function(sequielize, dataTypes){

    //Definir un alias.
    let alias = 'Coment'; //con este alias sequilize va a identificar internamente al archivo de modelo.
    
    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        productId:{
            type: dataTypes.INTEGER,
        },
        fecha_creacion:{
            type: dataTypes.DATE,
        },
    
        coment_text:{
            type: dataTypes.STRING,
        },
        userId:{
            type: dataTypes.INTEGER,
        },
    }
     let config = {
         table: 'coment',
         timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
         underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lougar de camelCase.
     }
     
    const Coment = sequielize.define(alias, cols, config);
    
    return Coment;
    
    }