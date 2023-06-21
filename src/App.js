
import './App.css';
import { Counter } from './components/Counter';
import { Diceroller } from './components/Diceroller';
import { Motivationquote } from './components/Motivationquote';
import { Navbar } from './components/Navbar';
import { Simpleinterest } from './components/Simpleinterest';
import { Todolist } from './components/Todolist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/counter' element={<Counter />} />
          <Route exact path='/diceroller' element={<Diceroller />} />
          <Route exact path='/todolist' element={<Todolist />} />
          <Route exact path='/simpleinterest' element={<Simpleinterest />} />
          <Route exact path='/motivationquote' element={<Motivationquote />} />
        </Routes>
      </Router>





    </>
  )
}

export default App;
