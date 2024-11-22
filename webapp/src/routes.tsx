import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Projects from './components/Projects';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    );
};