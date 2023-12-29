import { useEffect, useState } from 'react'
import { ProductsList } from '../../components/ProductsList'
// import { Dish } from '../../models'

import sushi from '../../assets/images/hiokiSushi.png'
import massa from '../../assets/images/massaItaliana.png'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

// const menuHome: Dish[] = [
//   {
//     id: 1,
//     title: 'Hioki Sushi',
//     description: [
//       'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.',
//       'Experimente o Japão sem sair do lar com nosso delivery!'
//     ],
//     note: 4.9,
//     image: sushi,
//     infos: ['Destaque da semana', 'Japonesa']
//   },
//   {
//     id: 2,
//     title: 'La Dolce Vita Trattoria',
//     description: [
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
//     ],
//     note: 4.6,
//     image: massa,
//     infos: ['Italiana']
//   },
//   {
//     id: 3,
//     title: 'La Dolce Vita Trattoria',
//     description: [
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
//     ],
//     note: 4.6,
//     image: massa,
//     infos: ['Italiana']
//   },
//   {
//     id: 4,
//     title: 'La Dolce Vita Trattoria',
//     description: [
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
//     ],
//     note: 4.6,
//     image: massa,
//     infos: ['Italiana']
//   },
//   {
//     id: 5,
//     title: 'La Dolce Vita Trattoria',
//     description: [
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
//     ],
//     note: 4.6,
//     image: massa,
//     infos: ['Italiana']
//   },
//   {
//     id: 6,
//     title: 'La Dolce Vita Trattoria',
//     description: [
//       'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
//     ],
//     note: 4.6,
//     image: massa,
//     infos: ['Italiana']
//   }
// ]

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
      <Header />
      <ProductsList dishesMenu={lojas} />
      <Footer />
    </>
  )
}
