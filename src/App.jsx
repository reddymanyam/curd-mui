import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import Update from './components/Update/Update';


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update' element={<Update />} />
        </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
