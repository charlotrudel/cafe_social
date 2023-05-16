import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import RecordList from './pages/recordList';
import Edit from './pages/edit';
import Create from './pages/create';

function App() {
    return (
        <div className="bg-darkBlack min-h-screen text-white">
            <header>
                <Navbar />
            </header>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <RecordList />
                        </div>
                    }
                />
                <Route path="/edit/:id" element={<Edit />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </div>
    );
}

export default App;
