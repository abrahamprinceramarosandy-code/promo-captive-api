import sequelize from "../config/database.js";
import CategoryModel from "../models/CategoryModel.js";

const Category = CategoryModel(sequelize);

export const getAllCategories = async () => {
  try {
    const categories = await Category.findAll();
    return categories;
  } catch (error) {
    throw new Error("Error fetching categories: " + error.message);
  }
};
