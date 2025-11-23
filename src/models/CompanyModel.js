import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Company = sequelize.define("Company", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, unique: true },
        number: { type: DataTypes.STRING(50) },
        id_category: { type: DataTypes.INTEGER, allowNull: false },
        address: { type: DataTypes.STRING },
        creation_date: { type: DataTypes.DATE, allowNull: false }
    }, {
        tableName: "company",
        timestamps: false
    });

    Company.associate = (models) => {
        Company.belongsTo(models.Category, { foreignKey: "id_category" });
        models.Category.hasMany(Company, { foreignKey: "id_category" });

        Company.hasMany(models.Campaign, { foreignKey: "id_company" });
    };

    return Company;
};