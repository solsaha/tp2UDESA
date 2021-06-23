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
        password:{
            type: dataTypes.STRING,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        fechaDeNacimiento:{
            type: dataTypes.DATE,
        },
    
        edad:{
            type: dataTypes.STRING,
        },
        email:{
            type: dataTypes.STRING,
        },
    }

    let config = {
        tableName: 'usuarios', 
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: false, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
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
   } ; 

   return Users;
}
 