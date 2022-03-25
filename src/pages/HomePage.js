import React from 'react'
import { CoinToss } from '../component/CoinToss'
import { CountApple } from '../component/CountApple';
import { NeatBirthdayList } from '../component/NeatBirthdayList';
import { RangeRandom } from '../component/RangeRandom';
import { TextMirror } from '../component/TextMirror';

export const HomePage = () => {
  return (
    <div className='HomePage'>
        <h1> Home Page</h1>
        <CoinToss /> <br/>
        <RangeRandom /><br/>
        <CountApple/><br/>
        <TextMirror/><br/>
        <NeatBirthdayList/>


    </div>
  );
}
