import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Todo from './Todo'
import CountD from './Countdown';
import ColorChange from './Colorchange';
import Tab from './tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
const todo = ReactDOM.createRoot(document.getElementById('todo'));
todo.render(<Todo />);
const countdown = ReactDOM.createRoot(document.getElementById('countdown'));
countdown.render(<CountD />);
const colorchange = ReactDOM.createRoot(document.getElementById('colorchange'));
colorchange.render(<ColorChange />);
const tabs = ReactDOM.createRoot(document.getElementById('tab'));
tabs.render(<Tab />);
const table = ReactDOM.createRoot(document.getElementById('table'));
table.render(<Table />);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
