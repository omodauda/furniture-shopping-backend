import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: 'admin@furnitureshopping.com',
      password: 'admin',
      fullName: 'admin admin',
      isAdmin: true,
      isVerified: true
    }
  })
  await prisma.productCategory.createMany({
    data: [
      {
        name: 'Chair',

      },
      {
        name: 'Table'
      },
      {
        name: 'ArmChair'
      },
      {
        name: 'Bed'
      },
      {
        name: 'Lamp'
      }
    ]
  });
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect()
    process.exit(1)
  })