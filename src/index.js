import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import EmployeeApiProvider from './contextapi/EmployeeContextApi';
import "./global.css"
createRoot(document.getElementById('root')).render(<EmployeeApiProvider><App/></EmployeeApiProvider>)