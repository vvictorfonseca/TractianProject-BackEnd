import { Request, Response } from "express";
import companyService, { CreateCompanyData } from "../services/companyService.js";

async function createNewCompany(req: Request, res: Response) {
  console.log("entrou")
  const newCompany: CreateCompanyData = req.body

  await companyService.createNewCompany(newCompany)

  return res.sendStatus(201)
}

async function getCompanies(req: Request, res: Response) {
  const companies = await companyService.getCompanies()

  return res.status(200).send(companies)
}

async function getCompanyById(req: Request, res: Response) {
  const companyId = req.params.companyId
  console.log("companyId", companyId)

  const company = await companyService.getCompanyById(companyId)
  console.log("company", company)

  return res.status(200).send(company)
}

async function getAllInfosBycompanyId(req: Request, res: Response) {
  const companyId: string = req.params.companyId

  const companyCountInfo = await companyService.getAllInfosBycompanyId(companyId)

  return res.status(200).send(companyCountInfo)
}

export { createNewCompany, getCompanies, getCompanyById, getAllInfosBycompanyId }