module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Buzos'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        image:{
            type: dataTypes.VARCHAR,
        },
        nombre_producto:{
            type: dataTypes.VARCHAR,
        },
        fecha_creacion:{
            type: dataTypes.DATE,
        },
    
        comentario:{
            type: dataTypes.VARCHAR,
        },
        userId:{
            type: dataTypes.INTEGER,
        },
    }

    let config = {
        tableName: 'productos', 
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

   const Buzos = sequelize.define(alias, cols, config);

   return Buzos;
}

    
    