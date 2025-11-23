import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Gender = sequelize.define("Gender", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        type: { type: DataTypes.STRING(20), allowNull: false, unique: true }
    }, {
        tableName: "GENDER",
        timestamps: false
    });

    Gender.associate = (models) => {
        Gender.hasMany(models.Consumer, { foreignKey: "id_gender" });
        Gender.hasMany(models.TargetCriteria, { foreignKey: "id_gender" });
    };

    return Gender;
};