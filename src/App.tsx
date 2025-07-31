import { Provider } from 'react-redux'
import { store } from './store'
import Rotas from './routes'
import 'bootstrap-icons/font/bootstrap-icons.css'

import GlobalStyles from './styles/GlobalStyles'
import Footer from './containers/Footer'
import { BrowserRouter } from 'react-router-dom'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles />
        <Rotas />
        <Footer />
        <Cart />
      </Provider>
    </BrowserRouter>
  )
}

export default App
