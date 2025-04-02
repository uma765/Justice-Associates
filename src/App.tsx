import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Scale } from 'lucide-react';
import Home from './pages/Home';
import Careers from './pages/Careers';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        {/* Navigation */}
        <header className="bg-slate-900 text-white">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Scale className="h-8 w-8 mr-2" />
                <h1 className="text-3xl font-bold">Justice & Associates</h1>
              </div>
              <nav>
                <ul className="flex space-x-6">
                  <li><Link to="/" className="hover:text-slate-300">Home</Link></li>
                  <li><Link to="/careers" className="hover:text-slate-300">Careers</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-4">
              <Scale className="h-6 w-6 mr-2" />
              <span className="font-bold">Justice & Associates</span>
            </div>
            <p className="text-slate-400">© 2024 Justice & Associates. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;