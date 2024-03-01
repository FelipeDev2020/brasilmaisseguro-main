import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Rotas from './router/Rotas';

function App() {
  return (
    <>
      <main>
        <Header />
          <Rotas />
        <Footer />     
      </main>
    </>
  )
}

export default App
