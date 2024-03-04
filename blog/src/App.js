import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

   let post = '안양 맛집'
   let [글제목, b] = useState(['안양 한식 추천','안양 횟집 추천','안양 일식 맛집']);
   

   return(
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] }</h4>
        <p>3월 1일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>3월 4일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>3월 4일 발행</p>
      </div>
      
      <h4>{ post }</h4>
   
      </div>
  );
}

export default App;
