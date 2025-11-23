import { DataTypes } from "sequelize";

export default (sequelize) => {
    const PromoCode = sequelize.define("PromoCode", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        id_offer: { type: DataTypes.INTEGER, allowNull: false },
        id_consumer: { type: DataTypes.INTEGER, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        expires_at: { type: DataTypes.DATE },
        is_used: { type: DataTypes.BOOLEAN, defaultValue: false },
        used_at: { type: DataTypes.DATE }
    }, {
        tableName: "promo_code",
        timestamps: false
    });

    PromoCode.associate = (models) => {
        PromoCode.belongsTo(models.Offer, { foreignKey: "id_offer" });
        PromoCode.belongsTo(models.Consumer, { foreignKey: "id_consumer" });
        PromoCode.hasOne(models.Purchase, { foreignKey: "id_promo_code" });
    };

    return PromoCode;
};