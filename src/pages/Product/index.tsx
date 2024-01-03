import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loja } from '../Home'
import { ProductsListItaliana } from '../../components/ProductsListItaliana'
import {
  Carrinho,
  ContainerItaliana,
  ContainerRestauranteCarrinho,
  Imagem,
  Italiana,
  LaDolce,
  Restaurantes
} from './styles'
import { Header } from '../../components/Header'

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
      <ContainerItaliana>
        <Header />

        <ContainerRestauranteCarrinho>
          <Restaurantes>
            <p>Restaurantes</p>
          </Restaurantes>
          <Carrinho>
            <p>0 produto(s) no carrinho</p>
          </Carrinho>
        </ContainerRestauranteCarrinho>

        <Imagem style={{ backgroundImage: `url(${loja.capa})` }}>
          <Italiana>
            <p>{loja.tipo}</p>
          </Italiana>
          <LaDolce>
            <p>{loja.titulo}</p>
          </LaDolce>
        </Imagem>

        <ProductsListItaliana items={loja.cardapio} />
      </ContainerItaliana>
    </>
  )
}

export default Product
