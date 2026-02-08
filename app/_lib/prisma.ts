import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient | undefined
}

let prisma: PrismaClient

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10, // Limitar conexões no Neon para não dar erro
})
const adapter = new PrismaPg(pool)

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({ adapter })
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient({ adapter })
  }
  prisma = global.cachedPrisma
}

export const db = prisma
