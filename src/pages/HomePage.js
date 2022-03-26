import React from 'react'
import { CoinToss } from '../component/CoinToss'
import { CountApple } from '../component/CountApple';
import { NeatBirthdayList } from '../component/NeatBirthdayList';
import { RangeRandom } from '../component/RangeRandom';
import { TextMirror } from '../component/TextMirror';
import {DisplayEditList} from '../component/DisplayEditList';

export const HomePage = () => {
  return (
    <div className='HomePage'>
        <h1> Home Page</h1>
        <CoinToss /> <br/>
        <RangeRandom /><br/>
        <CountApple/><br/>
        <TextMirror/><br/>
        <NeatBirthdayList/><br/>
        <DisplayEditList/>
    </div>
  );
}
