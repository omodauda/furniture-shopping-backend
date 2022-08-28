-- DropForeignKey
ALTER TABLE "user_address" DROP CONSTRAINT "user_address_userId_fkey";

-- AlterTable
ALTER TABLE "user_address" ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "user_address" ADD CONSTRAINT "user_address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
