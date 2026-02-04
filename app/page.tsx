import Header from "@/components/header"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"

const Home = () => {
  return <div>
  <Header/>
    <div className="p-5">
      <h2 className="text-xl font-bold">Olá, Danilo!</h2>
      <p className="text-md text-gray-600">Terça, 4 de Fevereiro.</p>

      <div className="flex items-center gap-2 mt-6">
        <Input placeholder="Buscar serviços"/>
        <Button>
          <SearchIcon />
        </Button>
      </div>

      <div className="relative w-full h-[150px] mt-6">
      <Image src="/Banner Pizza.svg" alt="Agende com os melhores" fill className="object-cover rounded-xl"/>
      </div>
    </div>
  </div>
}

export default Home