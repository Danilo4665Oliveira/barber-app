interface QuickSearchOption {
  imageUrl: string
  title: string
}

{
  /*Cria uma lista padrão pra evitar repetição de código*/
}
export const quickSearchOptions: QuickSearchOption[] = [
  {
    imageUrl: "/heroicons_scissors-20-solid.svg",
    title: "Corte de Cabelo",
  },
  {
    imageUrl: "/mdi_mustache.svg",
    title: "Barba",
  },
  {
    imageUrl: "/mdi_razor-double-edge.svg",
    title: "Acabamento",
  },
  {
    imageUrl: "/mingcute_eyebrow-fill.svg",
    title: "Sobrancelha",
  },
  {
    imageUrl: "/ph_towel-fill.svg",
    title: "Massagem",
  },
  {
    imageUrl: "/hugeicons_shampoo.svg",
    title: "Hidratação",
  },
]

/* <Button className="gap-2" variant="secondary">
<Image src="/mdi_mustache.svg" alt="Barba" width={16} height={16} />
Barba
</Button>

<Button className="gap-2" variant="secondary">
<Image src="/mdi_razor-double-edge.svg" alt="Acabamento" width={16} height={16} />
Acabamento
</Button>

<Button className="gap-2" variant="secondary">
<Image src="/mingcute_eyebrow-fill.svg" alt="Sobrancelha" width={16} height={16} />
Sobrancelha
</Button>

<Button className="gap-2" variant="secondary">
<Image src="/ph_towel-fill.svg" alt="Massagem" width={16} height={16} />
Massagem
</Button>

<Button className="gap-2" variant="secondary">
<Image src="/hugeicons_shampoo.svg" alt="Hidratação" width={16} height={16} />
Hidratação
</Button> */
