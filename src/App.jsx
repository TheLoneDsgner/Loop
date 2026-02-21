import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateLoop from './pages/Create-loop'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-loop" element={<CreateLoop />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>        
      </div>
    </>
  )
}

export default App
