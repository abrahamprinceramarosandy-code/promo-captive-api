import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Offer = sequelize.define("Offer", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        id_campaign: { type: DataTypes.INTEGER, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT },
        file_url: { type: DataTypes.STRING },
        cta_text: { type: DataTypes.STRING(100) },
        cta_link: { type: DataTypes.STRING },
        created_at: { type: DataTypes.DATE, allowNull: false }
    }, {
        tableName: "offer",
        timestamps: false
    });

    Offer.associate = (models) => {
        Offer.belongsTo(models.Campaign, { foreignKey: "id_campaign" });
        Offer.hasOne(models.TargetCriteria, { foreignKey: "id_offer" }); 
        Offer.hasMany(models.PromoCode, { foreignKey: "id_offer" });
        Offer.hasMany(models.Purchase, { foreignKey: "id_offer" });
    };

    return Offer;
};