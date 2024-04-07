import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Blush from './router/Blush/index'
import Bronzer from './router/Bronzer/index'
import Eyebrow from './router/Eyebrow/index'
import Eyeliner from './router/Eyeliner/index'
import Eyeshadow from './router/Eyeshadow/index'
import Korzina from './router/korzina'
import Lipliner from './router/Lipliner/index'
import Lipstick from './router/Lipstick/index'
import Mascara from './router/Mascara/index'
import Nailpolish from './router/Nailpolish/index'
import Like from './router/Likedproducts'
import Foundation from './router/Foundation'

function App() {
  const { pathname } = useLocation()
  return (
    <div className='wrapper'>
      <Navbar />
      {
        pathname === "/" ? <Hero /> : <></>
      }
      <Routes>
        <Route path='/blush' element={<Blush />} />
        <Route path='/lipliner' element={<Lipliner />} />
        <Route path='/eyebrow' element={<Eyebrow />} />
        <Route path='/eyeliner' element={<Eyeliner />} />
        <Route path='/eyeshadow' element={<Eyeshadow />} />
        <Route path='/foundation' element={<Foundation />} />
        <Route path='/lipstick' element={<Lipstick />} />
        <Route path='/mascara' element={<Mascara />} />
        <Route path='/nailpolish' element={<Nailpolish />} />
        <Route path='/bronzer' element={<Bronzer />} />
        <Route path='/likedproducts' element={<Like />} />
        <Route path='/korzina' element={<Korzina />} />
      </Routes>
    </div>
  )
}

export default App
