import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => (
  <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h1>Hello, I'm Mohamed Elkholy</h1>
    <p>This is my personal portfolio built with React & hosted on AWS Amplify.</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
