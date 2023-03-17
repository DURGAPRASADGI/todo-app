import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../services/AxiosInstance';
import {faker} from "@faker-js/faker"
const Employee = () => {
    const randomPhoto=faker.image.avatar();
    let[emp,setEmp]=useState("");
    console.log(emp);
    let {id}=useParams();
    useEffect(()=>{
       try {
        let fetchData=async ()=>{
          let {data}=await axiosInstance.get(`/employees/${id}`)
          console.log(data);
          setEmp(data);
      }
      fetchData();
       } catch (error) {
        console.log(error)
       }
    },[id])
  return (
    <section className='emp_block'>
        <article>
           <aside className="sidebar">
           <figure>
                <img src={randomPhoto} alt={emp.emp_name} />
            </figure>
           </aside>
           <aside className='mainBar'>
           <h1>{emp.emp_name}</h1>
                <p><span>Employee Salary:</span>{emp.emp_salary}</p>
                <p><span>Employee Designation:</span>{emp.emp_designation}</p>
                <p><span>Gender:</span>{emp.gender}</p>
           </aside>
        </article>
    </section>
  )
}

export default Employee