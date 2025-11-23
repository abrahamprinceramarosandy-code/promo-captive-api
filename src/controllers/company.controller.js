import { getAllCompanies } from "../services/company.serice.js";

export const fetchAllCompanies = async (req, res) => {
  try {
    const companies = await getAllCompanies();
    return res.status(200).json(companies);
  } catch (error) {
    return res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};