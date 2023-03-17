import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { EmployeeApiContext } from '../../contextapi/EmployeeContextApi'
import axiosInstance from '../../services/AxiosInstance';
import Spinner from '../../spinnner/Spinner';
const AllEmployees = () => {
  let {employees,loading}=useContext(EmployeeApiContext);
let navigate=useNavigate();
  let removeEmployee= async id=>{
    try {
      await axiosInstance.delete(`/employees/${id}`);
      toast.success("employee deleted successfully");
     window.location.assign("/")
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <div>
      <section id="empBlock">
   <article>
    <h2>List of Employees</h2>
    <table>
      <thead>
        <th>id</th>
        <th>Name</th>
        <th>Salary</th>
        <th>Designation</th>
        <th>Gender</th>
        <th>Deatails</th>
        <th>Edit</th>
        <th>Delete</th>
      </thead>
      <tbody>
        {loading===true? <Spinner/>:employees?.map(emp=>{
          return <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.emp_name}</td>
            <td>
              <span>&#x20b9;</span>
              -{emp.emp_salary}</td>
            <td>{emp.emp_designation}</td>
            <td>{emp.gender}</td>
            <td className='view-more'>
              <Link to={`/view-emp/${emp.id}`}>View More</Link>
            </td>
            <td className='edit-block'>
              <Link to={`/edit-emp/${emp.id}`}>Edit</Link>
            </td>
            <td className='delete-block'>
              <button onClick={()=>removeEmployee(emp.id)}>Delete</button>
            </td>
          </tr>
        })}
      </tbody>
    </table>
   </article>
    </section>
    </div>
  )
}

export default AllEmployees