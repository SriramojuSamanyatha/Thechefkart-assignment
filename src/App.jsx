import {BrowserRouter,Route,Routes} from 'react-router-dom'
import DishList from './components/DishList'
import Details from './components/Details'

import './App.css'
import IngredientView from './components/IngredientView'

const App = () =>{
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DishList dishDetails={Details} />} />
      <Route path="/category/:dishId" element={<IngredientView />} /> 
    </Routes>
 
    </BrowserRouter>

  )
  }


export default App