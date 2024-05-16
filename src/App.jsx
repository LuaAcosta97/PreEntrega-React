import { NavBar } from './Components/NavBarContainer/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemLIstContainer'

import './App.css'


function App() {

  return (
    <>
    <div className='body'>
      <NavBar/>
      <ItemListContainer saludo = "BIENVENIDOS A LA TIENDA" />
    </div>

    </>
  )
}

export default App
