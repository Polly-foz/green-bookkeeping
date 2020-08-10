import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  & div{
    width: 50px;
    height: 50px;
    background: blue;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border: 1px solid yellowgreen;
  }
`

function App() {
  return (
    <div className="App">
      <Box><div></div></Box>
    </div>
  );
}

export default App;
