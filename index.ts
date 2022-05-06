import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
  const t = await prisma.entry.findFirst();

  await prisma.entry.update({
    where: {
      id: 1,
    },
    data: {
      value: 123861532518063870000,
    },
  });

  // await prisma.entry.create({
  //   data: {
  //     value: 93431006234343600001111111,
  //   },
  // });
}

run();
