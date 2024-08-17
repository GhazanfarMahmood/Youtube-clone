import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Search from './pages/Search'
import Watch from './pages/Watch'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/watch/:id' element={<Watch />}/> 
    </Routes>
    </>
  )
}

export default App
// in the routes at the number 3 the route watch have id in the path which means that you have to pass the id for the watch page the id will be anything after the forward slash this will be an underscore or any other thing