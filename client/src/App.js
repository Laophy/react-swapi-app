import './App.css'
import { Characters } from './components/Characters'
import { Character } from './components/Character'
import { Route, Routes, Navigate, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <h1>Star Wars Application</h1>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="" element={<Characters />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </main>
      <footer>
        <p>Jordan, Jason - Group Project 2</p>
      </footer>
    </div>
  );
}

export default App;
