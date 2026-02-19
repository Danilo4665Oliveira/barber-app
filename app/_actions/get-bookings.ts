"use server"

import { db } from "../_lib/prisma"
import { endOfDay, startOfDay } from "date-fns"

interface GetBookingprops {
  serviceId: string
  date: Date
}

export const getBookings = async ({ date }: GetBookingprops) => {
  return await db.booking.findMany({
    where: {
      date: {
        lte: endOfDay(date),
        gte: startOfDay(date),
      },
    },
  })
}
