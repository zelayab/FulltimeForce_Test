import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes  } from 'react-router-dom';
import { CardComponent } from './components/CardComponent/CardComponent';
import { CommitsListComponent } from './components/CommitList/CommmitListComponent';

function App() {
  return (
    <Router>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/commits">Commits</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CardComponent />} />
          <Route path="/commits" element={<CommitsListComponent />} />
        </Routes>
      </div>
    </Router>
  );
}
