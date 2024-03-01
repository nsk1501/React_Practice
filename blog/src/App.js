import logo from './logo.svg';
import './App.css';

function App() {

   let post = '안양 회 맛집'
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'yellow', fontSize : '16px'} } >승권이의 첫 블로그 만들기</h4>
      </div>
      <h4>{ post }</h4>
   
      </div>
  );
}

export default App;
