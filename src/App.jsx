import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import CreateEmployees from './components/empComp/CreateEmployees';
import Navbar from './components/navbarComp/Navbar'
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Employee from './components/empComp/Employee';
import EditEmp from './components/empComp/EditEmp';
const App = () => {
  return (
    <Router>
       <Navbar/>
       <ToastContainer theme='dark'/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add-emp' element={<CreateEmployees/>}/>
        <Route path='/view-emp/:id' element={<Employee/>}/>
        <Route path='/edit-emp/:id' element={<EditEmp/>}/>
        <Route path='*' element={<PageNotFound/>}/>
       </Routes>
    </Router>
  )
}

export default App