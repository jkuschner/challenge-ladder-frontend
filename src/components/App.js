import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerList from './PlayerList';
import MatchList from './MatchList';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/players" element={<PlayerList/>}/>
        <Route path="/matches" element={<MatchList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
