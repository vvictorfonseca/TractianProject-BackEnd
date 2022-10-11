import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default prisma

// async function main() {
//   console.log("entrou")

//   const newAsset = await prisma.asset.create({
//     data: {
//       name: "Empacotadora",
//       image: "http://www.euromax.com.br/imagens/maquinas/maquina-embalagem-produto.jpg",
//       model: "FE25963br",
//       owner: "Freios Supremos",
//       description: "Embalagem do material",
//       status: "Stopped",
//       healthLevel: 20,
//       unit: {
//         connect: {
//           id: "633fa56f1dfe7c254ac8e9bc"
//         }
//       }
//     }
//   })
//   console.log(newAsset)
// }

// main()