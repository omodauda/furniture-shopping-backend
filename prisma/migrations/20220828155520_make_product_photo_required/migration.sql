/*
  Warnings:

  - Made the column `photo` on table `products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "products" ALTER COLUMN "photo" SET NOT NULL;
