/*
  Warnings:

  - The values [Completed] on the enum `ShippingStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ShippingStatus_new" AS ENUM ('Processing', 'Cancelled', 'Delivered');
ALTER TABLE "orders" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "orders" ALTER COLUMN "status" TYPE "ShippingStatus_new" USING ("status"::text::"ShippingStatus_new");
ALTER TYPE "ShippingStatus" RENAME TO "ShippingStatus_old";
ALTER TYPE "ShippingStatus_new" RENAME TO "ShippingStatus";
DROP TYPE "ShippingStatus_old";
ALTER TABLE "orders" ALTER COLUMN "status" SET DEFAULT 'Processing';
COMMIT;
