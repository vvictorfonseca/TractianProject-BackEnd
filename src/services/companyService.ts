import { Company } from "@prisma/client";

import companyRepository from "../repositories/companyRepository.js";

export type CreateCompanyData = Omit<Company, "id">

async function createNewCompany(newCompany: CreateCompanyData) {
  return await companyRepository.createNewCompany(newCompany)
}

async function getCompanies() {
  const companies = await companyRepository.getCompanies()

  return companies
}

async function getCompanyById(companyId: string) {
  const company = await companyRepository.getCompanyById(companyId)

  return company
}

const companyService = {
  createNewCompany,
  getCompanies,
  getCompanyById
}

export default companyService