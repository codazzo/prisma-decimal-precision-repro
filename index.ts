import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
  await prisma.entry.create({
    data: {
      value: "93431006234343600001",
    },
  });
}

run();
