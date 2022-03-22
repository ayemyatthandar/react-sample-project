import React from 'react'
import { CoinToss } from '../component/CoinToss'
import { RangeRandom } from '../component/RangeRandom';

export const HomePage = () => {
  return (
    <div className='HomePage'>
        <h1> Home Page</h1>
        <CoinToss /> <br/>
        <RangeRandom />


    </div>
  );
}
