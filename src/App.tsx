import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import { Rotas } from './routes'
import { Footer } from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
