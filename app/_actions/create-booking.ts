"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "../_lib/auth"

interface CreateBookingParams {
  userId: string
  serviceId: string
  date: Date
}

export const createBooking = async (params: CreateBookingParams) => {
  const session = await getServerSession(authOptions)

  if (!session?.user) {
    throw new Error("Usuário não autenticado!")
  }

  const userId = (session.user as { id: string }).id

  await db.booking.create({
    data: {
      ...params,
      userId: userId,
    },
  })

  revalidatePath("/barbershops/[id]")
  revalidatePath("/bookings")
}
