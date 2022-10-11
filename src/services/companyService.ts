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

async function getAllInfosBycompanyId(companyId: string) {
  const company = await companyRepository.getAllInfosBycompanyId(companyId)

  const unitCount = company.units.length
  const usersCount = company.users.length
  let assetsCount = 0

  company.units.forEach((info) => {
    info.assets.forEach((info) => {
      info.id ? assetsCount ++ : null
    })
  })

  const companyInfos = {
    unitCount,
    usersCount,
    assetsCount
  }

  return companyInfos
}

const companyService = {
  createNewCompany,
  getCompanies,
  getCompanyById,
  getAllInfosBycompanyId
}

export default companyService