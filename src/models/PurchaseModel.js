import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Purchase = sequelize.define("Purchase", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        id_offer: { type: DataTypes.INTEGER, allowNull: false },
        id_consumer: { type: DataTypes.INTEGER, allowNull: false },
        id_promo_code: { type: DataTypes.INTEGER },
        amount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        payment_status: { type: DataTypes.STRING(50), allowNull: false },
        company_confirms: { type: DataTypes.BOOLEAN, defaultValue: false }
    }, {
        tableName: "purchase",
        timestamps: false
    });

    Purchase.associate = (models) => {
        Purchase.belongsTo(models.Offer, { foreignKey: "id_offer" });
        Purchase.belongsTo(models.Consumer, { foreignKey: "id_consumer" });
        Purchase.belongsTo(models.PromoCode, { foreignKey: "id_promo_code" });
    };

    return Purchase;
};