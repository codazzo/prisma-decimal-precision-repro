-- CreateTable
CREATE TABLE "Entry" (
    "id" SERIAL NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Entry_pkey" PRIMARY KEY ("id")
);
