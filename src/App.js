import { useState } from 'react';
import './App.css';
import Description from './Description';

function App() {
  const [title, setTitle] = useState('React App');
  console.log('App component rendered');
  return (
    <div className="App">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <h1>{title}</h1>
      <Description />
    </div>
  );
}

export default App;
