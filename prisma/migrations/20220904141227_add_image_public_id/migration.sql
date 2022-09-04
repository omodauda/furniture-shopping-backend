/*
  Warnings:

  - You are about to drop the column `image` on the `product_image` table. All the data in the column will be lost.
  - Added the required column `publicId` to the `product_image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `product_image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product_image" DROP COLUMN "image",
ADD COLUMN     "publicId" TEXT NOT NULL,
ADD COLUMN     "url" TEXT NOT NULL;
