import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loja } from '../Home'
import { ProductsListItaliana } from '../../components/ProductsListStore'
import HeaderProductsListStore from '../../components/HeaderProductsListStore'

const Product = () => {
  const { id } = useParams()

  const [loja, setLoja] = useState<Loja>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setLoja(res))
  }, [id])

  if (!loja) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <HeaderProductsListStore store={loja} />
      <ProductsListItaliana items={loja?.cardapio} />
    </>
  )
}

export default Product
