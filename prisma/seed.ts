import { PrismaClient } from '@prisma/client';
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('admin', 10);
  await prisma.user.upsert({
    where: { email: 'admin@furnitureshopping.com' },
    update: {},
    create: {
      email: 'admin@furnitureshopping.com',
      password: hashedPassword,
      fullName: 'admin admin',
      isAdmin: true,
      isVerified: true
    }
  });
  await prisma.productCategory.upsert({
    where: { name: 'Chair' },
    update: {},
    create: {
      name: 'Chair',
      products: {
        createMany: {
          data: [
            {
              name: 'Coffee Chair',
              description: 'Coffee Chair is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
              price: 20.00,
              photo: 'https://res.cloudinary.com/omodauda/image/upload/v1662103102/furniture-shopping/Chair/coffee-chair_wrkhmk.png',
              quantity: 0
            }
          ]
        }
      }
    }
  });
  await prisma.productCategory.upsert({
    where: { name: 'Table' },
    update: {},
    create: {
      name: 'Table',
      products: {
        createMany: {
          data: [
            {
              name: 'Minimal Stand',
              description: 'Minimal Stand is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
              price: 25.00,
              photo: 'https://res.cloudinary.com/omodauda/image/upload/v1662103126/furniture-shopping/Table/minimal-stand_sbsfep.png',
              quantity: 1
            },
            {
              name: 'Simple Desk',
              description: 'Simple Desk is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
              price: 50.00,
              photo: 'https://res.cloudinary.com/omodauda/image/upload/v1662103141/furniture-shopping/Table/simple-desk_daz5pu.png',
              quantity: 5
            },
            {
              name: 'Minimal Desk',
              description: 'Minimal Desk is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
              price: 35.00,
              photo: 'https://res.cloudinary.com/omodauda/image/upload/v1662103141/furniture-shopping/Table/simple-desk_daz5pu.png',
              quantity: 1
            },
            {
              name: 'Coffee Table',
              description: 'Coffee Table is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
              price: 25.00,
              photo: 'https://res.cloudinary.com/omodauda/image/upload/v1662103153/furniture-shopping/Table/coffee-table_ybvvxt.png',
              quantity: 1
            }
          ]
        }
      }
    }
  });
  await prisma.productCategory.upsert({
    where: { name: 'ArmChair' },
    update: {},
    create: {
      name: 'Arm Chair',
      products: {
        createMany: {
          data: [
            {
              name: 'Coffee Chair',
              description: 'Coffee Chair is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
              price: 20.00,
              photo: 'https://res.cloudinary.com/omodauda/image/upload/v1662103471/furniture-shopping/Arm%20chair/armchair_r7su6k.jpg',
              quantity: 0
            }
          ]
        }
      }
    }
  });
  await prisma.productCategory.upsert({
    where: { name: 'Bed' },
    update: {},
    create: {
      name: 'Bed',
      products: {
        createMany: {
          data: [
            {
              name: 'King Bed',
              description: 'King Bed is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
              price: 157.00,
              photo: 'https://res.cloudinary.com/omodauda/image/upload/v1662103362/furniture-shopping/Bed/kingbed_hfpfsw.webp',
              quantity: 2
            }
          ]
        }
      }
    }
  });
  await prisma.productCategory.upsert({
    where: { name: 'Lamp' },
    update: {},
    create: {
      name: 'Lamp',
      products: {
        createMany: {
          data: [
            {
              name: 'Black Simple Lamp',
              description: 'Black Simple Lamp is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
              price: 12.00,
              photo: 'https://res.cloudinary.com/omodauda/image/upload/v1662103401/furniture-shopping/Lamp/simple-lamp_jn7ika.png',
              quantity: 8
            },
            {
              name: 'Minimal Lamp',
              description: 'Minimal Lamp is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
              price: 12.00,
              photo: 'https://res.cloudinary.com/omodauda/image/upload/v1662103401/furniture-shopping/Lamp/simple-lamp_jn7ika.png',
              quantity: 6
            }
          ]
        }
      }
    }
  })
  // data: [
  //   {
  //     name: 'Chair',

  //   },
  //   {
  //     name: 'Table'
  //   },
  //   {
  //     name: 'ArmChair'
  //   },
  //   {
  //     name: 'Bed'
  //   },
  //   {
  //     name: 'Lamp'
  //   }
  // ]
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