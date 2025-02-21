/*
  Warnings:

  - Added the required column `finished` to the `todos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "todos" ADD COLUMN     "finished" TEXT NOT NULL;
