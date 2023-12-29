import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Italiana } from '../Italiana'

type Dish = {
  id: number
  titulo: string
  destacado?: boolean
  tipo?: string
  avaliacao?: number
  descricao: string
  capa: string
  cardapio?: string[]
}

const Product = () => {
  const { id } = useParams()

  const [produto, setProduto] = useState<Dish>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes${id}`)
      .then((res) => res.json())
      .then((res) => setProduto(res))
  }, [id])

  return (
    <>
      <Italiana />
    </>
  )
}

export default Product
