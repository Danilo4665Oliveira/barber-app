import Header from "@/components/header"
import { Button } from "./ui/button"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "@/components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "@/components/booking-item"
import Search from "@/components/search"
import Link from "next/link"
import { authOptions } from "./_lib/auth"
import { getServerSession } from "next-auth"
import { ptBR } from "date-fns/locale"
import { format } from "date-fns"

const Home = async () => {
  const session = await getServerSession(authOptions)
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })
  const confirmedBookings = session?.user
    ? await db.booking.findMany({
        where: {
          userId: session ? (session.user as { id: string }).id : undefined,
          date: {
            gte: new Date(),
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
    : []

  return (
    <div>
      {/*Header*/}
      <Header />
      <div className="p-5">
        {/*Texto*/}
        <h2 className="text-xl font-bold">
          Olá, {session?.user ? session.user.name : "Bem vindo"} !
        </h2>
        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE, dd", { locale: ptBR })}
          </span>
          <span>&nbsp;de&nbsp;</span>
          <span className="capitalize">
            {format(new Date(), "MMMM", { locale: ptBR })}
          </span>
        </p>

        {/*Barra de busca (Melhor colocar o espaçamento aqui pra não ter que olhar o componente pra poder mudar)*/}
        <div className="mt-6">
          <Search />
        </div>

        {/*Busca rápida Está na _constants/search.ts (Diminuindo quantidade de linhas)*/}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?.service={option.title}`}>
                <Image
                  src={option.imageUrl}
                  alt={option.title}
                  width={16}
                  height={16}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        {/*Banner*/}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/Banner Pizza.svg"
            alt="Agende com os melhores"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {confirmedBookings.length > 0 && (
          <>
            {/* AGENDAMENTO */}
            <h2 className="mb-3 mt-6 font-bold uppercase text-gray-400">
              Agendamentos
            </h2>

            <div className="mt-6 flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (
                <BookingItem booking={booking} key={booking.id} />
              ))}
            </div>
          </>
        )}

        {/*Agendamento componentizado no booking-item.tsx (Diminuindo a quantidade de linhas)*/}

        {/*Recomendados*/}
        <h2 className="mb-3 mt-6 font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem barbershop={barbershop} key={barbershop.id} />
          ))}
        </div>

        {/*Populares*/}
        <h2 className="mb-3 mt-6 font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem barbershop={barbershop} key={barbershop.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
