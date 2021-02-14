module.exports = (sequelize, dataTypes) => {
    
    let alias = "Nota";

    let cols = {
                id: {
                    type: dataTypes.INTEGER, 
                    primaryKey: true,
                    autoIncrement: true
                },
                titulo: {
                    type: dataTypes.STRING(45),
                    allowNull: false
                },
                texto: {
                    type: dataTypes.STRING(100),
                    allowNull: false
                }
              };

    let config = {
        tableName: "notas",
        timestamps: true,  
        underscored: true,
        paranoid: true
    }

    let Nota = sequelize.define(alias, cols, config);
    
    return Nota;

}