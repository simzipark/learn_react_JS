import React from 'react';
import ReactDOM from 'react-dom';

// import App from './App2';
import App from './App.js';


//리액트 애플리케이션은 하나에 한개의 컴포넌트만 rendering할 수 있기때문에 <App /><Potatp /> 로 사용할 수 없음
// ReactDOM.render(<App2 />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

