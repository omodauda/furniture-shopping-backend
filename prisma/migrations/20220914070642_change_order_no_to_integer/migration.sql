/*
  Warnings:

  - Changed the type of `orderNo` on the `orders` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "orderNo",
ADD COLUMN     "orderNo" INTEGER NOT NULL;
