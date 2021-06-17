module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Productos'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        image:{
            type: dataTypes.STRING,
        },
        nombre_producto:{
            type: dataTypes.STRING,
        },
        fecha_creacion:{
            type: dataTypes.DATE,
        },
    
        comentario:{
            type: dataTypes.STRING,
        },
        userId:{
            type: dataTypes.STRING,
        },
    }

    let config = {
        tableName: 'productos', 
        timestamp: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

   const Productos = sequelize.define(alias, cols, config);

 /*   Productos.associate = function(models){
       Productos.belongTo(models.Coments,{
        as:'coments',
        foreignKey: 'comentsId'
       })
   } */

   return Productos;
}

    
    