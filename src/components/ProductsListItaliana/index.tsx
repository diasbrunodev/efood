import { DishItaliana } from '../../models'
import { ProductItaliana } from '../ProductItaliana'
import {
  Carrinho,
  ContainerItaliana,
  ContainerList,
  ContainerP,
  ContainerRestauranteCarrinho,
  ContentProduct,
  ContentTextButton,
  Imagem,
  ImgFechar,
  Italiana,
  LaDolce,
  List,
  Modal,
  ModalContent,
  Restaurantes
} from './styles'

import fundoItaliana from '../../assets/images/fundoItaliana.png'
import fechar from '../../assets/images/fechar.png'
import imagemModal from '../../assets/images/image_modal.png'
import { Header } from '../Header'
import { Button } from '../Button'
import { Footer } from '../Footer'
import { useState } from 'react'

export type Props = {
  dishesMenuItaliana: DishItaliana[]
}

export const ProductsListItaliana = ({ dishesMenuItaliana }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
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
      <Imagem style={{ backgroundImage: `url(${fundoItaliana})` }}>
        <Italiana>
          <p>Italiana</p>
        </Italiana>
        <LaDolce>
          <p>La Dolce Vita Trattoria</p>
        </LaDolce>
      </Imagem>
      <ContainerList className="container">
        <List>
          {dishesMenuItaliana.map((dish) => (
            <li key={dish.id} onClick={() => setModalEstaAberto(true)}>
              <ProductItaliana
                image={dish.image}
                title={dish.title}
                description={dish.description}
              />
            </li>
          ))}
        </List>
      </ContainerList>

      <Modal className={modalEstaAberto ? 'visivel' : ''}>
        <ModalContent>
          <ImgFechar>
            <img
              src={fechar}
              alt="Ícone de fechar"
              onClick={() => setModalEstaAberto(false)}
            />
          </ImgFechar>
          <ContentProduct>
            <div>
              <img src={imagemModal} />
            </div>
            <ContentTextButton>
              <h3>Pizza Marguerita</h3>
              <ContainerP>
                <p>
                  A pizza Margherita é uma pizza clássica da culinária italiana,
                  reconhecida por sua simplicidade e sabor inigualável. Ela é
                  feita com uma base de massa fina e crocante, coberta com molho
                  de tomate fresco, queijo mussarela de alta qualidade,
                  manjericão fresco e azeite de oliva extra-virgem. A combinação
                  de sabores é perfeita, com o molho de tomate suculento e
                  ligeiramente ácido, o queijo derretido e cremoso e as folhas
                  de manjericão frescas, que adicionam um toque de sabor
                  herbáceo. É uma pizza simples, mas deliciosa, que agrada a
                  todos os paladares e é uma ótima opção para qualquer ocasião.
                </p>
                <p>Serve: de 2 a 3 pessoas</p>
              </ContainerP>
              <Button
                type="saibaMais"
                to="/carrinho"
                title="Adicionar ao carrinho - R$ 60,90"
              >
                Adicionar ao carrinho - R$ 60,90
              </Button>
            </ContentTextButton>
          </ContentProduct>
        </ModalContent>
        <div
          onClick={() => setModalEstaAberto(false)}
          className="overlay"
        ></div>
      </Modal>
      <Footer />
    </ContainerItaliana>
  )
}
