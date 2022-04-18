import React from 'react'
import './NeatBirthdayList.css'

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
      
        <li>{person.name} :{person.birthday?.length>0? person.birthday:"Unknown"}</li>
     )
      return <div className='NeatBirthdayList'>{birthdayList}</div>
}
