import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles/styles'
import { Rotas } from './routes'
import { store } from './store'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import Cart from './components/Cart'

export type CardapioItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
          <Rotas />
          <Footer />
          <Cart />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
