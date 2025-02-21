/*
  Warnings:

  - You are about to drop the column `currentPlan` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `hasChildren` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `maritalStatus` on the `Lead` table. All the data in the column will be lost.
  - You are about to drop the column `serviceType` on the `Lead` table. All the data in the column will be lost.
  - Added the required column `contactPreference` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profession` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasCNPJ` to the `Lead` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hasHealthPlan` to the `Lead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lead" DROP COLUMN "currentPlan",
DROP COLUMN "hasChildren",
DROP COLUMN "maritalStatus",
DROP COLUMN "serviceType",
ADD COLUMN     "contactPreference" TEXT NOT NULL,
ADD COLUMN     "profession" TEXT NOT NULL,
DROP COLUMN "hasCNPJ",
ADD COLUMN     "hasCNPJ" BOOLEAN NOT NULL,
DROP COLUMN "hasHealthPlan",
ADD COLUMN     "hasHealthPlan" BOOLEAN NOT NULL;
