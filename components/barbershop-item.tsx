import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { StarIcon } from "lucide-react"
import { Badge } from "./ui/badge"
import Link from "next/link"

interface BarbershopItemProps {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <CardContent className="p-0 px-1 pt-1">
        {/*IMAGEM*/}
        <div className="relative h-[159px] w-full">
          <Image
            alt={barbershop.name}
            fill
            className="rounded-2xl object-cover"
            src={barbershop.imageUrl}
          />
          <Badge
            className="absolute left-2 top-2 z-50 space-x-1"
            variant="secondary"
          >
            <StarIcon className="fill-primary text-primary" size={12} />
            <p className="text-xs font-semibold">5,0</p>
          </Badge>
        </div>

        {/*Texto*/}
        <div className="px-1 py-3">
          <h3 className="overflow-hidden text-ellipsis text-nowrap font-semibold">
            {barbershop.name}
          </h3>
          <p className="overflow-hidden text-ellipsis text-nowrap text-sm text-gray-400">
            {barbershop.address}
          </p>
          <Button className="mt-3 w-full" variant="secondary">
            <Link href={`/barbershops/${barbershop.id}`}>Agendar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopItem
