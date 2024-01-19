import { useParams } from 'react-router-dom'

import { ProductsListStore } from '../../components/ProductsListStore'
import HeaderProductsListStore from '../../components/HeaderProductsListStore'
import { useGetProductIdQuery } from '../../services/api'

type LojaParams = {
  id: string
}

const Product = () => {
  const { id } = useParams() as LojaParams

  const { data: loja, isLoading } = useGetProductIdQuery(id)

  return (
    <>
      <div>
        <HeaderProductsListStore store={loja} isLoading={isLoading} />
        <ProductsListStore items={loja?.cardapio} isLoading={isLoading} />
      </div>
    </>
  )
}

export default Product
