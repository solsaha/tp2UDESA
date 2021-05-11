module.exports = function(sequielize, dataTypes){

    //Definir un alias.
    let alias = 'Buzo'; //con este alias sequilize va a identificar internamente al archivo de modelo.
    
    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        title:{
            type: dataTypes.STRING
        },
        rating:{
            type: dataTypes.DECIMAL
        },
        awards:{
            type: dataTypes.INTEGER
        },
        release_date:{
            type: dataTypes.DATE
        },
        length:{
            type: dataTypes.INTEGER
        },
        genre_id:{
            type: dataTypes.INTEGER
        },
    }
     let config = {
         table: 'buzos',
         timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
         underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lougar de camelCase.
     }
     
    const Movie = sequielize.define(alias, cols, config);
    
    return Movie;
    
    }
    
    