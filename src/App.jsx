import { NavBar } from './Components/NavBarContainer/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemLIstContainer'
import './App.css'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo="BIENVENIDOS A LA TIENDA" />} />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo="BIENVENIDOS A LA TIENDA" />} />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
