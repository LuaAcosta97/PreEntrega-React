import { NavBar } from './Components/NavBarContainer/NavBar'
import { ItemLIstContainer } from './Components/ItemListContainer/ItemLIstContainer'

import './App.css'


function App() {

  return (
    <>
    <div className='body'>
      <NavBar/>
      <ItemLIstContainer saludo = "BIENVENIDOS A LA TIENDA" />
    </div>

    </>
  )
}

export default App
