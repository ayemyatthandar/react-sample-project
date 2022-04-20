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
      
        <li  css ={css ({
          width:200,
          height:  40,
          fontFamily: 'Times New Roman',
          padding: '20px 30px 20px',

        })} >{person.name} :{person.birthday?.length>0? person.birthday:"Unknown"}</li>
     )
      return <div css ={css ({
        width: 350,
        minHeight: 200,
        backgroundColor: 'rgb(243, 197, 136)',
        color: 'black',
        border: '1px solid white',
        padding: 'auto',
        margin: 40,
        textAlign : 'left',
      })} className='NeatBirthdayList'> {birthdayList}</div>
}
