import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "../../services/AxiosInstance";

const EditEmp = () => {
  let { id } = useParams();
  let navigate=useNavigate();
  let [updateEmp, setUpdateEmp] = useState({
    emp_name: "",
    emp_salary: "",
    emp_designation: "",
    gender: "",
  });
  // console.log(updateEmp);
  let { emp_name, emp_salary, emp_designation, gender } = updateEmp;
  let handleChange=(e)=>{
    let {name,value}=e.target;
    setUpdateEmp({...updateEmp,[name]:value})
  };
  // !to update dynamicall data using id
  useEffect(()=>{
    try {
      // *according to id we shoudl fetch data to update
      let fetchData=async ()=>{
        let {data}=await axiosInstance.get(`/employees/${id}`);
        console.log(data);
        setUpdateEmp(data);
      }
      fetchData();
    } catch (error) {
      toast.error(error)
    }
  },[id])
  let handleSubmit=async(e)=>{
    e.preventDefault();
    // navigate("/")
    window.location.assign("/")

    try {
      let payload={ emp_name, emp_salary, emp_designation, gender } ;
      console.log(payload);
      await axiosInstance.put(`/employees/${id}`,payload);
      toast.success(`${updateEmp.emp_name} is successfully updated`)
    } catch (error) {
      toast.error(error);
    }
  }
  return (
    <section className="formBlock">
    <article>
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Employee name</label>
          <input
            type="text"
            className="form-control"
            name="emp_name"
            value={emp_name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "5px 20px",
              border: "1px solid #ccc",
              outline: "none",
              borderRadius: "6px",
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Employee salary</label>
          <input
            type="text"
            className="form-control"
            name="emp_salary"
            value={emp_salary}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "5px 20px",
              border: "1px solid #ccc",
              outline: "none",
              borderRadius: "6px",
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Employee desig</label>
          <select
            name="emp_designation"
            value={emp_designation}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "5px 20px",
              border: "1px solid #ccc",
              outline: "none",
              borderRadius: "6px",
            }}
          >
            <option value="Select designation">Select designation</option>
            <option value="Java Developer">Java Developer</option>
            <option value="NodeJS Developer">NodeJS Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Api Developer">Api Developer</option>
          </select>
        </div>
        <div
          className="form-group"
          name="gender"
          value={gender}
          onChange={handleChange}
        >
          <label htmlFor="gender">Employee Gender</label>
          <input type="radio" name="gender" value="male" />
          Male
          <input type="radio" name="gender" value="female" />
          Female
          <input type="radio" name="gender" value="others" />
          Others
        </div>
        <div className="form-group">
          <button>Update Employee</button>
        </div>
      </form>
    </article>
  </section>
  );
};

export default EditEmp;
