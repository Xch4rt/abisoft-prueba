/*
  Warnings:

  - Added the required column `startDate` to the `Plates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plates" ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;
