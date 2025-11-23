import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Consumer = sequelize.define("Consumer", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        forname: { type: DataTypes.STRING(100), allowNull: false },
        email: { type: DataTypes.STRING, unique: true },
        number: { type: DataTypes.STRING(50) },
        age: { type: DataTypes.SMALLINT },
        id_social_profil: { type: DataTypes.INTEGER },
        id_gender: { type: DataTypes.INTEGER },
        city: { type: DataTypes.STRING(100) }
    }, {
        tableName: "CONSUMER",
        timestamps: false
    });

    Consumer.associate = (models) => {
        Consumer.belongsTo(models.Gender, { foreignKey: "id_gender" });
        Consumer.belongsTo(models.SocialProfil, { foreignKey: "id_social_profil" });
        Consumer.hasMany(models.PromoCode, { foreignKey: "id_consumer" });
        Consumer.hasMany(models.Purchase, { foreignKey: "id_consumer" });
    };

    return Consumer;
};