import { StoreListHome } from '../../components/StoresListHome'

import { useGetFeaturedLojaQuery } from '../../services/api'

export const Home = () => {
  const { data: lojas, isLoading } = useGetFeaturedLojaQuery()

  return (
    <>
      <StoreListHome dishesMenu={lojas} isLoading={isLoading} />
    </>
  )
}
