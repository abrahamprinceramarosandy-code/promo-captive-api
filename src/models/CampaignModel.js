import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Campaign = sequelize.define("Campaign", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        id_company: { type: DataTypes.INTEGER, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT },
        status: { type: DataTypes.STRING(50), allowNull: false },
        start_date: { type: DataTypes.DATE, allowNull: false },
        end_date: { type: DataTypes.DATE }
    }, {
        tableName: "campaign",
        timestamps: false
    });

    Campaign.associate = (models) => {
        Campaign.belongsTo(models.Company, { foreignKey: "id_company" });        
        Campaign.hasMany(models.Offer, { foreignKey: "id_campaign" });
    };

    return Campaign;
};