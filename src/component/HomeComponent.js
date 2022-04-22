/** @jsxImportSource @emotion/react */
import React from 'react'
import { CoinToss } from '../component/CoinToss'
import { CountApple } from '../component/CountApple';
import { NeatBirthdayList } from '../component/NeatBirthdayList';
import { RangeRandom } from '../component/RangeRandom';
import { TextMirror } from '../component/TextMirror';
import {DisplayEditList} from '../component/DisplayEditList';
import { css } from '@emotion/react';
function HomeComponent() {
  return (
    <div css={css`background: #5DADE2  ;`}className='HomePage'>
        <h1 css={css`padding:50px 0; font-family:Georgia; text-decoration: underline; color: black`}> React Sample Project</h1>
        <CoinToss />
        <RangeRandom /><br/>
        <CountApple/><br/>
        <TextMirror/><br/>
        <NeatBirthdayList/><br/>
        <DisplayEditList/>
    </div>
  )
}

export default HomeComponent;