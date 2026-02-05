import Header from "@/components/header"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopItem from "@/components/barbershop-item"

const Home = async () => {
  console.log("TESTE: O código chegou aqui!")
  console.log("DB INSTANCE:", db)

  if (!db) {
    return <div>Erro: O Banco de Dados não foi instanciado corretamente.</div>
  }
  const barbershops = await db.barbershop.findMany({})
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

        {/*Banner*/}
        <div className="relative mt-6 h-[150px] w-full">
          <Image
            src="/Banner Pizza.svg"
            alt="Agende com os melhores"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {/*Agendamento*/}
        <h2 className="mb-3 mt-6 font-bold uppercase text-gray-400">
          Agendamentos
        </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/*Esquerda*/}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="flex items-center">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Corte & Estilo</p>
              </div>
            </div>
            {/*Direita*/}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Fevereiro</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">17:30</p>
            </div>
          </CardContent>
        </Card>

        {/*Recomendados*/}
        <h2 className="mb-3 mt-6 font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto">
          {barbershops.map((barbershop) => (
            <BarbershopItem barbershop={barbershop} key={barbershop.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
