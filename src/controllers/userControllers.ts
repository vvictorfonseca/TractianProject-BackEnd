import { Request, Response } from "express";
import userService, { CreateUserData, CreateLoginData } from "../services/userService.js";
import companyService, { CreateCompanyData } from "../services/companyService.js";

async function createNewUser(req: Request, res: Response) {
  const newUser: CreateUserData = req.body
  const user: CreateUserData = res.locals.user
  
  const userAdm = await userService.getUserByEmail(user.email)
  console.log(userAdm.isAdm)

  if (!userAdm.isAdm) {
    throw { type: "not_allowed", message: "This user can't create new users" }
  }

  await userService.createNewUser(newUser)

  return res.sendStatus(201)
}

async function loginAdm(req: Request, res: Response) {
  console.log("entrou")
  const newLogin: CreateLoginData = req.body
  const userAdm: CreateUserData = await userService.getUserByEmail(newLogin.email)

  console.log(newLogin)

  if (!userAdm.isAdm) {
    throw { type: "not_allowed", message: "You can't login as Adm" }
  }

  const token = await userService.loginUser(newLogin)
  
  return res.status(200).send({...userAdm, token})
}

async function loginUser(req: Request, res: Response) {
  const newLogin: CreateLoginData = req.body
  const companyId: string = req.params.companyId

  const user: CreateUserData = await userService.getUserByEmail(newLogin.email)

  if(user.companyId !== companyId) {
    throw { type: "not_allowed", message: "You can't login in this company" }
  }

  const token = await userService.loginUser(newLogin)
  
  return res.status(200).send({...user, token})
}

async function getUserByName(req: Request, res: Response) {
  const name: string = req.params.name

  const userName = await userService.getUserByName(name)
  const userStatus = userName.isAdm
  const companyId = userName.companyId

  const company = await companyService.getCompanyById(companyId)

  return res.status(200).send({
    status: userStatus,
    companyId: companyId,
    name: company.name
  })
}

export { createNewUser, loginAdm, loginUser, getUserByName }