import { DataTypes } from "sequelize";

export default (sequelize) => {
    const TargetCriteria = sequelize.define("TargetCriteria", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        id_offer: { type: DataTypes.INTEGER, allowNull: false },
        id_gender: { type: DataTypes.INTEGER },
        id_social_profil: { type: DataTypes.INTEGER },
        min_age: { type: DataTypes.SMALLINT },
        max_age: { type: DataTypes.SMALLINT },
        city: { type: DataTypes.STRING(100) }
    }, {
        tableName: "TARGET_CRITERIA",
        timestamps: false
    });

    TargetCriteria.associate = (models) => {
        TargetCriteria.belongsTo(models.Offer, { foreignKey: "id_offer" });
        TargetCriteria.belongsTo(models.Gender, { foreignKey: "id_gender" });
        TargetCriteria.belongsTo(models.SocialProfil, { foreignKey: "id_social_profil" });
    };

    return TargetCriteria;
};