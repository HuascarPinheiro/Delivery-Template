import { Provider } from 'react-redux'
import { store } from './store'
import Rotas from './routes'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

import GlobalStyles from './styles/GlobalStyles'
import Footer from './containers/Footer'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
