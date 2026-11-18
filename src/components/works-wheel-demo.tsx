"use client"

import { WorksWheel, type WorksWheelItem } from "./ui/works-wheel"

/**
 * A roda na tela inteira, com nove capas do Unsplash. Role o mouse ou o trackpad (ou arraste) para abrir o anel e
 * girar as peças. Troque os títulos, as capas e os links pelos do seu portfólio: o anel se ajusta a quantas peças
 * receber.
 */

const unsplash = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&h=690&q=75`

export const works: WorksWheelItem[] = [
  { title: "Prisma", image: unsplash("1636955779321-819753cd1741"), alt: "Formas fluidas em degradê de arco-íris", href: "#prisma" },
  { title: "Brasa", image: unsplash("1541701494587-cb58502866ab"), alt: "Tinta vermelha e azul se espalhando na água", href: "#brasa" },
  { title: "Nebulosa", image: unsplash("1462331940025-496dfbfc7564"), alt: "Nebulosa em bolha entre as estrelas", href: "#nebulosa" },
  { title: "Espiral", image: unsplash("1617791160505-6f00504e3519"), alt: "Espiral de lâminas em azul e violeta", href: "#espiral" },
  { title: "Órbita", image: unsplash("1618005198919-d3d4b5a92ead"), alt: "Esfera clara sobre ondas em tons pastel", href: "#orbita" },
  { title: "Neon", image: unsplash("1519608487953-e999c86e7455"), alt: "Rua da cidade à noite sob luz roxa", href: "#neon" },
  { title: "Mármore", image: unsplash("1549490349-8643362247b5"), alt: "Mármore líquido em magenta e branco", href: "#marmore" },
  { title: "Decolagem", image: unsplash("1614728263952-84ea256f9679"), alt: "Ônibus espacial subindo entre nuvens de fumaça", href: "#decolagem" },
  { title: "Maré", image: unsplash("1634017839464-5c339ebe3cb4"), alt: "Ondas de linhas finas em azul", href: "#mare" },
]

export default function WorksWheelDemo() {
  return (
    <main style={{ height: "100svh", margin: 0, background: "#0a0a0a" }}>
      <WorksWheel items={works} label="Obras '26" action="Ver" />
    </main>
  )
}
