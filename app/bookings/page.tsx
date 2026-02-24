import Header from "@/components/header"
import { getServerSession } from "next-auth"
import { authOptions } from "../_lib/auth"
import { db } from "../_lib/prisma"
import { notFound } from "next/navigation"
import BookingItem from "@/components/booking-item"

const Bookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session) {
    return notFound()
  }
  const userId = (session.user as { id: string }).id
  const confirmedBookings = await db.booking.findMany({
    where: {
      userId: userId,
      date: {
        gt: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
  })

  const concludedBookings = await db.booking.findMany({
    where: {
      userId: userId,
      date: {
        lt: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
  })

  return (
    <>
      <Header />
      <div className="space-y-3 p-5">
        <h1 className="mb-4 text-xl font-bold">Meus Agendamentos</h1>
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 font-bold uppercase text-gray-400">
              Agendamentos Confirmados
            </h2>
            {confirmedBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </>
        )}

        {concludedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 font-bold uppercase text-gray-400">
              Agendamentos Finalizados
            </h2>
            {concludedBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </>
        )}
      </div>
    </>
  )
}

export default Bookings
