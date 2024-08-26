import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import OneboxPage from './pages/OneboxPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/onebox" element={<OneboxPage />} />
            </Routes>
        </Router>
    );
}

export default App;
