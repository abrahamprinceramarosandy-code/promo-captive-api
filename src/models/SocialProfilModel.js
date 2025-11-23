import { DataTypes } from "sequelize";

export default (sequelize) => {
    const SocialProfil = sequelize.define("SocialProfil", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        type: { type: DataTypes.STRING(50), allowNull: false, unique: true }
    }, {
        tableName: "social_profil",
        timestamps: false
    });

    SocialProfil.associate = (models) => {
        SocialProfil.hasMany(models.Consumer, { foreignKey: "id_social_profil" });
        SocialProfil.hasMany(models.TargetCriteria, { foreignKey: "id_social_profil" });
    };

    return SocialProfil;
};