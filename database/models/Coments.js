module.exports = function(sequielize, dataTypes){

    //Definir un alias.
    let alias = 'Coments'; //con este alias sequilize va a identificar internamente al archivo de modelo.
    
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
         table: 'coments',
         timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
         underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lougar de camelCase.
     }
     
    const Coment = sequielize.define(alias, cols, config);

   /*  Coments.associate = function(models){
        Coments.hasMany(models.Productos,{
         as:'productos',
         foreignKey: 'productId'
        })
    } */
 
    
    return Coment;
    
    }