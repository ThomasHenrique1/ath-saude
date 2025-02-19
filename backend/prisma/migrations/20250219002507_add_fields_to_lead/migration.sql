/*
  Warnings:

  - You are about to drop the column `plan` on the `Lead` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Lead_email_key";

-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "plan",
ADD COLUMN     "age" INTEGER,
ADD COLUMN     "currentPlan" TEXT,
ADD COLUMN     "hasCNPJ" TEXT,
ADD COLUMN     "hasChildren" TEXT,
ADD COLUMN     "hasHealthPlan" TEXT,
ADD COLUMN     "maritalStatus" TEXT;
