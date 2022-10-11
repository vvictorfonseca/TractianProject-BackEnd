import { User } from "@prisma/client";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config({ path: ".env "});

import userRepository from "../repositories/userRepository.js";

const { JWT_SECRET_KEY } = process.env

export type CreateUserData = Omit<User, "id">
export type CreateLoginData = Omit<User, "id" | "fullName" | "adm" | "companyId" | "isAdm">

async function createNewUser(newUser: CreateUserData) {
  const SALT = 10;
  const userExist = await userRepository.getUserByEmail(newUser.email)

  if (userExist) {
    throw { type: "conflict", message: "user already exist" }
  }

  newUser.password = bcrypt.hashSync(newUser.password, SALT)
  return await userRepository.createNewUser(newUser)
}

async function loginUser(newLogin: CreateLoginData) {
  const user = await userRepository.getUserByEmail(newLogin.email)
  console.log("user", user)

  const isCorrectPassword = bcrypt.compareSync(newLogin.password, user.password);
  console.log(isCorrectPassword)

  if (!user || !isCorrectPassword) {
    throw { type: "not_found", message: "invalid user or password" }
  }

  const expiresAt = { expiresIn: 60 * 60 * 24 };
  const token = jwt.sign({id: user.id, email: user.email}, JWT_SECRET_KEY, expiresAt)
  return token;
}

async function getUserByEmail(email: string) {
  const user = await userRepository.getUserByEmail(email)

  return user
}

async function getUserByName(name: string) {
  const user = await userRepository.getUserByName(name)

  return user
}

const userService = {
  createNewUser,
  loginUser,
  getUserByEmail,
  getUserByName
}

export default userService