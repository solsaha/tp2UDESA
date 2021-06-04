module.exports = function(sequelize, dataTypes){

    //Definir un alias.
    let alias = 'Usarios'; //Con este alias sequelize va a identificar internamente al archivo de modelo.

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
        fechaDeNaciemiento:{
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
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.        
    }

   const Users = sequelize.define(alias, cols, config);

   return Users;
}
 