"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require('bcrypt');
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const hashedPassword = yield bcrypt.hash('admin', 10);
        yield prisma.user.upsert({
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
        const chair = yield prisma.productCategory.upsert({
            where: { name: 'Chair' },
            update: {},
            create: {
                name: 'Chair'
            }
        });
        yield prisma.product.create({
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
        const table = yield prisma.productCategory.upsert({
            where: { name: 'Table' },
            update: {},
            create: {
                name: 'Table',
            }
        });
        yield prisma.product.create({
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
        });
        yield prisma.product.create({
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
        });
        yield prisma.product.create({
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
        });
        yield prisma.product.create({
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
        const armchair = yield prisma.productCategory.upsert({
            where: { name: 'ArmChair' },
            update: {},
            create: {
                name: 'Arm Chair',
            }
        });
        yield prisma.product.create({
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
        const bed = yield prisma.productCategory.upsert({
            where: { name: 'Bed' },
            update: {},
            create: {
                name: 'Bed',
            }
        });
        yield prisma.product.create({
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
        const lamp = yield prisma.productCategory.upsert({
            where: { name: 'Lamp' },
            update: {},
            create: {
                name: 'Lamp',
            }
        });
        yield prisma.product.create({
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
        });
        yield prisma.product.create({
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
        });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
