import React from 'react'
import {BrowserRouter as Router, Route, Link, NavLink, Routes} from 'react-router-dom'
import { CoinFlip } from "../component/CoinFlip";
import { Random } from "../component/Random";
import { CountApple } from "../component/CountApple";
import { TextMirror } from "../component/TextMirror";
import { NeatBirthdayList } from "../component/NeatBirthdayList";
import { DisplayEditList } from "../component/DisplayEditList";

function Home() {
  return (
   <Router>
        <div>
            <Link exact to="/">Home</Link>
            <NavLink exact activeClassName='active' to='/coin'>Coin Flip</NavLink>
            <NavLink exact activeClassName='active' to='/random'>Random in Range</NavLink>
            <NavLink exact activeClassName='active' to='/counting'>Counting Apples</NavLink>
            <NavLink exact activeClassName='active' to='/textMirror'>Text Mirror</NavLink>
            <NavLink exact activeClassName='active' to='/neatBirthday'>Next Birthday List</NavLink>
            <NavLink exact activeClassName='active' to='/display'>Display & Edit List</NavLink>
            <hr/>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/coin'  element={<CoinFlip/>}/>
                <Route exact path='/random' element={<Random/>}/>
                <Route exact path='/counting' element={<CountApple/>}/>
                <Route exact path='/textMirror' element={<TextMirror/>}/>
                <Route exact path='/neatBirthday' element={<NeatBirthdayList/>}/>
                <Route exact path='/display' element={<DisplayEditList/>}/>
             

            </Routes>

        </div>
   </Router>
  )
}

export default Home