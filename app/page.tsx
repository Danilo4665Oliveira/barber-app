import Header from "@/components/header"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { db } from "./_lib/prisma"
import BarbershopItem from "@/components/barbershop-item"
import { quickSearchOptions } from "./_constants/search"
import BookingItem from "@/components/booking-item"

//TODO Receber agendamento como prop

const Home = async () => {
  if (!db) {
    return <div>Erro: O Banco de Dados não foi instanciado corretamente.</div>
  }
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      {/*Header*/}
      <Header />
      <div className="p-5">
        {/*Texto*/}
        <h2 className="text-xl font-bold">Olá, Danilo!</h2>
        <p className="text-md text-gray-600">Terça, 4 de Fevereiro.</p>

        {/*Barra de busca*/}
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Buscar serviços" />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/*Busca rápida Está na _constants/search.ts (Diminuindo quantidade de linhas)*/}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageUrl}
                alt={option.title}
                width={16}
                height={16}
              />
              {option.title}
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

        {/*Agendamento componentizado no booking-item.tsx (Diminuindo a quantidade de linhas)*/}
        <BookingItem />

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
