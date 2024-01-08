import { useEffect, useState } from 'react'
import { ProductsList } from '../../components/StoresListHome'

export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Loja = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
  infos: string[]
}

export const Home = () => {
  const [lojas, setLojas] = useState<Loja[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setLojas(res))
  }, [])

  return (
    <>
      <ProductsList dishesMenu={lojas} />
    </>
  )
}
