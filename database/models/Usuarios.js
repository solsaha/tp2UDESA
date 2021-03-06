module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Usuarios'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

    //Describir la configuración de las columnas de la tabla
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        password:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
        },
        fecha_nacimiento:{
            type: dataTypes.DATE,
        },
    
        edad:{
            type: dataTypes.STRING,
        },
        imagen_perfil:{
            type: dataTypes.STRING,
        },
      
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE,
        },   
    }

    let config = {
        tableName: 'usuarios', 
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

   const Users = sequelize.define(alias, cols, config);

       Users.associate = function(models){
       Users.hasMany(models.Productos,{

           as:"buzos",
           foreignKey:"user_id"

       });
       Users.hasMany(models.Coments,{

        as:"comentarios",
        foreignKey:"user_id"

    })
   } ; //configuro la asociacion de productos y comentarios asociados al usuario

   return Users;
}
 