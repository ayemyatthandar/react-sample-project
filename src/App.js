/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import Navigation from './pages/Navigation';

class App extends React.Component {
  
    render()
    {
      return (
      <div  css={css`color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      overflow: hidden;
      font-size: 17px;`} className="App">
        <Navigation />
      </div>)
    }
 }
export default App;