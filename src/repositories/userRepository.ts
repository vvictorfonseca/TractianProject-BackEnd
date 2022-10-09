import prisma from "../database.js";
import { CreateUserData } from "../services/userService.js";

async function createNewUser(newUser: CreateUserData) {
  await prisma.user.create({ data: newUser })
}

async function getUserByEmail(email: string) {
  const user = await prisma.user.findFirst({
    where: {
      email
    }
  })

  return user
}

const userRepository = {
  createNewUser,
  getUserByEmail
}

export default userRepository