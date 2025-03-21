/*
  Warnings:

  - You are about to drop the column `name` on the `ideas` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `project` table. All the data in the column will be lost.
  - Added the required column `title` to the `ideas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ideas" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "project" DROP COLUMN "name",
ADD COLUMN     "title" TEXT NOT NULL;
