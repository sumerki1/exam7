import React, {useState} from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { faUser, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {useLocation, useNavigate} from 'react-router-dom'


const Navbar = () => {
   const {pathname} = useLocation()
  const navigate = useNavigate()
  const [searching, setSearching] = useState("")

   const  Search = (e) => {
   e.preventDefault()  
     navigate(`/${searching}`)
     setSearching("")
   }
  return (
    <div className='header-container'>
       <div className='gmb'>
         <div className='text-document'>
            <a className='document' href="#">Get 10% off selected items when you spend £50 with code: YAY10 *Exclusions apply</a>
         </div>
       </div>
       <div className='usp-desktop'>
          <div className='desk-items'>
          <div className='text-document1'>
            <a className='document1' href="#">FREE Sheer Tinted Lip Balm when you spend £40 on By BEAUTY BAY</a>
         </div>
         <div className='text-document1'>
            <a className='document1' href="#">Ready, set, haul! These newbies belong in your collection</a>
         </div>
         <div className='text-document1'>
            <a className='document1' href="#">Download the app for exclusive offers and discounts!</a>
         </div>
          </div> 
          <select className='languages'>
            <option value="uzb">UZB / SO`M</option>
            <option value="rubl">RUS / RUBL</option>
            <option value="dollor">ENG / DOLLOR</option>
          </select>
       </div>
       <div className='desktop-header'>
          <div className='main'>
            <img className='main-img' src="https://i.pinimg.com/originals/e5/c5/00/e5c5001af14698a1dcdacad3bff66c04.png" alt="#" />
            <div onSubmit={Search} className='search'>
                <input onChange={e => setSearching(e.target.value)} value={searching}  className='input' type="text" placeholder='Search,products, brands'/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon'/>
            </div>
            <div className='header_icons'>
               <a href="https://www.beautybay.com/edited" className='edited'>EDITED</a> 
               <a href="https://www.beautybay.com/account/tribe/overview" className='edited'>TRIBE</a>
               <FontAwesomeIcon icon={faUser} className='icons'/>
              <NavLink to={'/likedproducts'}><FontAwesomeIcon icon={faHeart} className='icons' /></NavLink>
               <NavLink to={'/korzina'}><FontAwesomeIcon icon={faCartShopping} className='icons'/></NavLink>
            </div>
          </div>
         <div className='categorys'>
         <ul className='category'>
          <li><NavLink style={{color: pathname === "/blush" ? "blueviolet" : "black"}} to={'/blush'}>Blush</NavLink></li>
          <li><NavLink style={{color: pathname === "/" ? "blueviolet" : "black"}} to={'/'}>By beauty bay</NavLink></li>
          <li><NavLink style={{color: pathname === "/lipliner" ? "blueviolet" : "black"}} to={'/lipliner'}>Lip liner</NavLink></li>
          <li><NavLink style={{color: pathname === "/eyebrow" ? "blueviolet" : "black"}} to={'/eyebrow'}>Eyebrow</NavLink></li>
          <li><NavLink style={{color: pathname === "/eyeliner" ? "blueviolet" : "black"}} to={'/eyeliner'}>Eyeliner</NavLink></li>
          <li><NavLink style={{color: pathname === "/eyeshadow" ? "blueviolet" : "black"}} to={'/eyeshadow'}>Eye shadow</NavLink></li>
          <li><NavLink style={{color: pathname === "/foundation" ? "blueviolet" : "black"}} to={'/foundation'}>Foundation</NavLink></li>
          <li><NavLink style={{color: pathname === "/lipstick" ? "blueviolet" : "black"}} to={'/lipstick'}>Lipstick</NavLink></li>
          <li><NavLink style={{color: pathname === "/mascara" ? "blueviolet" : "black"}} to={'/mascara'}>Mascara</NavLink></li>
          <li><NavLink style={{color: pathname === "/nailpolish" ? "blueviolet" : "black"}} to={'/nailpolish'}>Nail polish</NavLink></li>
          <li><NavLink style={{color: pathname === "/bronzer" ? "blueviolet" : "black"}} to={'/bronzer'}>Bronzer</NavLink></li>
        </ul>
         </div>
       </div>
    </div>
  )
}

export default Navbar