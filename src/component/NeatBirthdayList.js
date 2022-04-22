/** @jsxImportSource @emotion/react */
import React from 'react'
import './NeatBirthdayList.css'
import { css } from '@emotion/react';

export const NeatBirthdayList = () => {
    const item = [
      { name: 'Rose', birthday:  "feb-23"},
      { name: 'Luna', birthday: null },
      { name: 'Miles', birthday:  "Mar-23"},
      { name: 'Lily', birthday: "" },
      { name: 'Kevin', birthday:  "Jun-6"},
      { name: 'James', birthday: null },
      { name: 'Jason', birthday:  ""},
      { name: 'Steven', birthday: "Dec-10" },
      ]
      const birthdayList = item.map(person => 
      
        <li  css={css
        `width:200px;
        height:  40px;
        font-family: 'Times New Roman', Times, serif;
        padding: 20px 30px 20px ;`} >{person.name} :{person.birthday?.length>0? person.birthday:"Unknown"}</li>
     )
      return <div css={css
      `width: 350px;
      min-height: 400px;
      background-color: #45B39D ;
      color: black;
      border: 1px solid white;
      border-radius:10px;
      padding: auto; 
      margin: 100px 200px 50px 500px;
      font-size:14px;
      text-align : left;`} className='NeatBirthdayList'> {birthdayList}</div>
}
