-- CreateEnum
CREATE TYPE "todo_priority_type" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- CreateTable
CREATE TABLE "todos" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "priority" "todo_priority_type" NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
);
