import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import WatchList from './components/watchlist'
import NavBar from './components/NavBar'

function App() {
  return(
    <>
    <NavBar/>
    <Routes>  
       <Route path="/" element={<Home/>} />
       <Route path="/watchlist" element={<WatchList/>} />
    </Routes>
    </>
  )
}

export default App;
