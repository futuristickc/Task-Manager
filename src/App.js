import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blu-600 p-4 text-white">
          <h1 className='text-xl'>Task Management Application</h1>
        </header>
        <Navbar />
        <main className='p-4'>
          <div className='container mx-auto'>
            <Routes>
              <Route path='/' element={<h2>Home Page</h2>} />
              <Route path='/tasks' element={<TaskList />} />
              <Route path='/profile' element={<h2>Profile Page</h2>} />
            </Routes>
            <TaskForm />
          </div>
        </main>
        <footer className='bg-blue-600 p-4 text-white text-center'>
          Task Manager © 2024
        </footer>
      </div>
    </Router>
  );
}

export default App;
