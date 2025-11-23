import db from "../models/index.js";

export const getAllCompanies = async () => {
  try {
    const companies = await db.Company.findAll({
      include: [
        {
          model: db.Category,
          attributes: ["id", "name"]
        }
      ]
    });

    return companies;
  } catch (error) {
    throw new Error("Error fetching companies: " + error.message);
  }
};
