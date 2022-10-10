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

async function getAllInfosBycompanyId(companyId: string) {
  const company = await prisma.company.findFirst({
    where: {
      id: companyId
    },
    select: {
      id: true,
      name: true,
      isAdm: true,

      users: {
        select: {
          fullName: true
        }
      },

      units: {
        select: {
          id: true,
          name: true,

          assets: {
            select: {
              id: true,
              name: true,
              image: true,
              model: true,
              owner: true,
              description: true,
              status: true,
              healthLevel: true
            }
          }
        }
      }
    }
  })

  return company
}

const companyRepository = {
  createNewCompany,
  getCompanies,
  getCompanyById,
  getAllInfosBycompanyId
}

export default companyRepository