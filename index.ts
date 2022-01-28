import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function run() {
  await prisma.entry.create({
    data: {
      value: new Prisma.Decimal('93431006234343600001')
    }
  })
}

run()