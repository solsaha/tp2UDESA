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
    
       /*  coment_text:{
            type: dataTypes.STRING,
        },
        user_id:{
            type: dataTypes.INTEGER,
        }, */
    }
     let config = {
         table: 'coments',
         timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
         underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lougar de camelCase.
     }
     
    const Coment = sequielize.define(alias, cols, config);

    Coment.associate = function(models){
        Coment.belongsTo(models.Productos,{
         as:'productos',
         foreignKey: 'productId'
        });
    Coment.belongsTo(models.Usuarios,{
        as:'usuario',
        foreignKey:'user_id'
    })
    } 
 //el alias es lo que le sigue a models, Coment es de la linea 33
    
    return Coment;
    
    }