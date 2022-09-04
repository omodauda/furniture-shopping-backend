-- CreateEnum
CREATE TYPE "ShippingStatus" AS ENUM ('Processing', 'Cancelled', 'Completed');

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "status" "ShippingStatus" NOT NULL DEFAULT 'Processing';
