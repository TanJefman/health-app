import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Result from './Result';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
      <Route path="/result" element={<Result/>} />
      <Route path="/" element={<Form/>} />
      </Routes>

      </header>
    </div>
  );
}

export default App;
