import React from 'react'
import { Route, Link, NavLink, Routes} from 'react-router-dom'
import { CoinToss } from '../component/CoinToss'
import { CountApple } from '../component/CountApple';
import { DisplayEditList } from '../component/DisplayEditList';
import HomeComponent from '../component/HomeComponent';
import { NeatBirthdayList } from '../component/NeatBirthdayList';
import { RangeRandom } from '../component/RangeRandom';
import { TextMirror } from '../component/TextMirror';

function Navigation() {
  return (
    <div>
            <Link exact to="/">🏠Home</Link><space />
            <NavLink exact activeClassName='active' to='/coin'>😀Coin Flip</NavLink> <space />
            <NavLink exact activeClassName='active' to='/random'>🔟Random in Range</NavLink><space />
            <NavLink exact activeClassName='active' to='/counting'>🍎Counting Apples</NavLink> <space />
            <NavLink exact activeClassName='active' to='/textMirror'>🔢Text Mirror</NavLink> <space />
            <NavLink exact activeClassName='active' to='/neatBirthday'>📅Next Birthday List</NavLink> <space />
            <NavLink exact activeClassName='active' to='/display'>📝Display & Edit List</NavLink> 
            <hr/>

            <Routes>
              <Route exact path='/' element={<HomeComponent />}/>
              <Route exact path='/coin'  element={<CoinToss />}/>
              <Route exact path='/random' element={<RangeRandom />}/>
              <Route exact path='/counting' element={<CountApple />}/>
              <Route exact path='/textMirror' element={<TextMirror />}/>
              <Route exact path='/neatBirthday' element={<NeatBirthdayList />}/>
              <Route exact path='/display' element={<DisplayEditList />}/>
            </Routes>
    </div>
  )
}

export default Navigation