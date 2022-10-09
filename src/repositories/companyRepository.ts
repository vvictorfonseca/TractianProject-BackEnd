import prisma from "../database.js";
import { CreateCompanyData } from "../services/companyService.js";

async function createNewCompany(newComany: CreateCompanyData) {
  await prisma.company.create({ data: newComany })
}

async function getCompanies() {
  const companies = prisma.company.findMany({
    where: {
      isAdm: false
    }
  })

  return companies
}

async function getCompanyById(companyId: string) {
  const company = prisma.company.findFirst({
    where: {
      id: companyId
    },
    select: {
      name: true,
      isAdm: true
    }
  })

  return company
}

const companyRepository = {
  createNewCompany,
  getCompanies,
  getCompanyById
}

export default companyRepository