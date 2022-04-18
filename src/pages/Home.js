import React from 'react'
import { Route, Link, NavLink, Routes} from 'react-router-dom'
import { CoinToss } from '../component/CoinToss'
import { CountApple } from '../component/CountApple';
import { DisplayEditList } from '../component/DisplayEditList';
import HomeComponent from '../component/HomeComponent';
import { NeatBirthdayList } from '../component/NeatBirthdayList';
import { RangeRandom } from '../component/RangeRandom';
import { TextMirror } from '../component/TextMirror';

function Home() {
  return (
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

export default Home