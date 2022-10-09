import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"

const prisma = new PrismaClient();
export default prisma

// async function main() {
//   console.log("entrou")
//   const password = "123456";
//   const encrypted = bcrypt.hashSync(password, 10)
//   console.log("encrypted", encrypted)

//   const newUser = await prisma.user.create({
//     data: {
//       fullName: "Adm Account",
//       email: "adm@tractian.com",
//       password: encrypted,
//       isAdm: true,
//       company: {
//         connect: {
//           id: "633fa5b27cf0392f6b1b0d28"
//         }
//       }
//     }
//   })
//   console.log(newUser)
// }

//main()