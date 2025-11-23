import { DataTypes } from "sequelize";

export default (sequelize) => {
    const Category = sequelize.define("Category", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false }
    }, {
        tableName: "CATEGORY",
        timestamps: false
    });

    Category.associate = (models) => {
        Category.hasMany(models.Company, { foreignKey: "id_category" });
    };

    return Category;
};