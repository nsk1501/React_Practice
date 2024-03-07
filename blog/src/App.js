/* eslint-disable*/

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

   let post = '안양 맛집'
   let [글제목, 글제목변경] = useState(['한식 추천','일식 추천','중식 추천']);
   let [따봉1, 따봉변경1] = useState(0);
   let [따봉2, 따봉변경2] = useState(0); 
   let [따봉3, 따봉변경3] = useState(0);

   

   return(
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      <button>가나다순정렬</button>

      <button onClick={()=>{

        let copy = [...글제목];
        copy[0] = '양식 추천';
        글제목변경(copy);
      }}>글수정</button>
      
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={() => { 따봉변경1(따봉1 + 1) }}>👍</span>
        {따봉1} </h4>
        <p>3월 1일 발행</p>


      </div>
      <div className="list">
        <h4>{ 글제목[1] }  <span onClick={() => { 따봉변경2(따봉2 + 1) }}>👍</span>
        {따봉2} </h4>
        <p>3월 4일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }   <span onClick={() => { 따봉변경3(따봉3 + 1) }}>👍</span>
        {따봉3} </h4>
        <p>3월 4일 발행</p>
      </div>
      
      <h4>{ post }</h4>
   
      </div>
  );
}

export default App;
