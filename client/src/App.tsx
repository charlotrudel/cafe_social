import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecordList from './pages/RecordList';
import Edit from './pages/Edit';
import Create from './pages/Create';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <div className="bg-darkBlack min-h-screen text-white">
            <header>
                <Navbar />
            </header>
            <Routes>
                <Route path="/" element={<RecordList />} />
                <Route
                    path="/edit/:id"
                    element={
                        <PrivateRoute>
                            <Edit />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/create"
                    element={
                        <PrivateRoute>
                            <Create />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
