import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Create from './components/Create/Create';
import Update from './components/Update/Update';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  const getData = async () => {

    try {
      const dataa = await axios.get("http://localhost:4000/users");
      setData(dataa.data)
    }
    catch (err) {
      console.log(`https//:error is ${err}`)
    }

  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home data={data} />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
