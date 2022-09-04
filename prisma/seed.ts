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

  const chair = await prisma.productCategory.upsert({
    where: { name: 'Chair' },
    update: {},
    create: {
      name: 'Chair'
    }
  });
  await prisma.product.create({
    data: {
      productCategoryId: chair.id,
      name: 'Coffee Chair',
      description: 'Coffee Chair is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
      price: 20.00,
      quantity: 0,
      images: {
        createMany: {
          data: [
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103102/furniture-shopping/Chair/coffee-chair_wrkhmk.png',
              publicId: 'furniture-shopping/Chair/coffee-chair_wrkhmk'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103102/furniture-shopping/Chair/coffee-chair_wrkhmk.png',
              publicId: 'furniture-shopping/Chair/coffee-chair_wrkhmk'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103102/furniture-shopping/Chair/coffee-chair_wrkhmk.png',
              publicId: 'furniture-shopping/Chair/coffee-chair_wrkhmk'
            }
          ]
        }
      }
    }
  });


  const table = await prisma.productCategory.upsert({
    where: { name: 'Table' },
    update: {},
    create: {
      name: 'Table',
    }
  });
  await prisma.product.create({
    data: {
      productCategoryId: table.id,
      name: 'Minimal Stand',
      description: 'Minimal Stand is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
      price: 25.00,
      quantity: 5,
      images: {
        createMany: {
          data: [
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103141/furniture-shopping/Table/simple-desk_daz5pu.png',
              publicId: 'furniture-shopping/Table/simple-desk_daz5pu'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103141/furniture-shopping/Table/simple-desk_daz5pu.png',
              publicId: 'furniture-shopping/Table/simple-desk_daz5pu'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103141/furniture-shopping/Table/simple-desk_daz5pu.png',
              publicId: 'furniture-shopping/Table/simple-desk_daz5pu'
            }
          ]
        }
      }
    }
  })
  await prisma.product.create({
    data: {
      productCategoryId: table.id,
      name: 'Simple Desk',
      description: 'Simple Desk is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
      price: 50.00,
      quantity: 1,
      images: {
        createMany: {
          data: [
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103141/furniture-shopping/Table/simple-desk_daz5pu.png',
              publicId: 'furniture-shopping/Table/simple-desk_daz5pu'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103141/furniture-shopping/Table/simple-desk_daz5pu.png',
              publicId: 'furniture-shopping/Table/simple-desk_daz5pu'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103141/furniture-shopping/Table/simple-desk_daz5pu.png',
              publicId: 'furniture-shopping/Table/simple-desk_daz5pu'
            }
          ]
        }
      }
    }
  })
  await prisma.product.create({
    data: {
      productCategoryId: table.id,
      name: 'Minimal Desk',
      description: 'Minimal Desk is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
      price: 35.00,
      quantity: 1,
      images: {
        createMany: {
          data: [
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103141/furniture-shopping/Table/simple-desk_daz5pu.png',
              publicId: 'furniture-shopping/Table/simple-desk_daz5pu'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103141/furniture-shopping/Table/simple-desk_daz5pu.png',
              publicId: 'furniture-shopping/Table/simple-desk_daz5pu'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103141/furniture-shopping/Table/simple-desk_daz5pu.png',
              publicId: 'furniture-shopping/Table/simple-desk_daz5pu'
            }
          ]
        }
      }
    }
  })
  await prisma.product.create({
    data: {
      productCategoryId: table.id,
      name: 'Coffee Table',
      description: 'Coffee Table is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
      price: 25.00,
      quantity: 1,
      images: {
        createMany: {
          data: [
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103153/furniture-shopping/Table/coffee-table_ybvvxt.png',
              publicId: 'furniture-shopping/Table/coffee-table_ybvvxt'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103153/furniture-shopping/Table/coffee-table_ybvvxt.png',
              publicId: 'furniture-shopping/Table/coffee-table_ybvvxt'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103153/furniture-shopping/Table/coffee-table_ybvvxt.png',
              publicId: 'furniture-shopping/Table/coffee-table_ybvvxt'
            }
          ]
        }
      }
    }
  });

  const armchair = await prisma.productCategory.upsert({
    where: { name: 'ArmChair' },
    update: {},
    create: {
      name: 'Arm Chair',
    }
  });
  await prisma.product.create({
    data: {
      productCategoryId: armchair.id,
      name: 'Coffee Chair',
      description: 'Coffee Chair is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
      price: 20.00,
      quantity: 0,
      images: {
        createMany: {
          data: [
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103471/furniture-shopping/Arm%20chair/armchair_r7su6k.jpg',
              publicId: 'furniture-shopping/Arm%20chair/armchair_r7su6k'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103471/furniture-shopping/Arm%20chair/armchair_r7su6k.jpg',
              publicId: 'furniture-shopping/Arm%20chair/armchair_r7su6k'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103471/furniture-shopping/Arm%20chair/armchair_r7su6k.jpg',
              publicId: 'furniture-shopping/Arm%20chair/armchair_r7su6k'
            }
          ]
        }
      }
    }
  });

  const bed = await prisma.productCategory.upsert({
    where: { name: 'Bed' },
    update: {},
    create: {
      name: 'Bed',
    }
  })
  await prisma.product.create({
    data: {
      productCategoryId: bed.id,
      name: 'King Bed',
      description: 'King Bed is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
      price: 157.00,
      quantity: 2,
      images: {
        createMany: {
          data: [
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103362/furniture-shopping/Bed/kingbed_hfpfsw.webp',
              publicId: 'furniture-shopping/Bed/kingbed_hfpfsw'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103362/furniture-shopping/Bed/kingbed_hfpfsw.webp',
              publicId: 'furniture-shopping/Bed/kingbed_hfpfsw'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103362/furniture-shopping/Bed/kingbed_hfpfsw.webp',
              publicId: 'furniture-shopping/Bed/kingbed_hfpfsw'
            }
          ]
        }
      }
    }
  });

  const lamp = await prisma.productCategory.upsert({
    where: { name: 'Lamp' },
    update: {},
    create: {
      name: 'Lamp',
    }
  })
  await prisma.product.create({
    data: {
      productCategoryId: lamp.id,
      name: 'Black Simple Lamp',
      description: 'Black Simple Lamp is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
      price: 12.00,
      quantity: 8,
      images: {
        createMany: {
          data: [
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103401/furniture-shopping/Lamp/simple-lamp_jn7ika.png',
              publicId: 'furniture-shopping/Lamp/simple-lamp_jn7ika'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103401/furniture-shopping/Lamp/simple-lamp_jn7ika.png',
              publicId: 'furniture-shopping/Lamp/simple-lamp_jn7ika'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103401/furniture-shopping/Lamp/simple-lamp_jn7ika.png',
              publicId: 'furniture-shopping/Lamp/simple-lamp_jn7ika'
            }
          ]
        }
      }
    }
  })
  await prisma.product.create({
    data: {
      productCategoryId: lamp.id,
      name: 'Minimal Lamp',
      description: 'Minimal Lamp is made of by natural wood.The design that is very simple and minimal. This is truly one of the best furniture in any family for now. With 3 different colors, you can easily select the best match for your home.',
      price: 12.00,
      quantity: 6,
      images: {
        createMany: {
          data: [
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103401/furniture-shopping/Lamp/simple-lamp_jn7ika.png',
              publicId: 'furniture-shopping/Lamp/simple-lamp_jn7ika'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103401/furniture-shopping/Lamp/simple-lamp_jn7ika.png',
              publicId: 'furniture-shopping/Lamp/simple-lamp_jn7ika'
            },
            {
              url: 'https://res.cloudinary.com/omodauda/image/upload/v1662103401/furniture-shopping/Lamp/simple-lamp_jn7ika.png',
              publicId: 'furniture-shopping/Lamp/simple-lamp_jn7ika'
            }
          ]
        }
      }
    }
  })
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