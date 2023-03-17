import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../services/AxiosInstance";
import {toast} from "react-toastify"
const CreateEmployees = () => {
    let navigate=useNavigate(); //redirection purpose
  let [state, setState] = useState({
    emp_name: "",
    emp_salary: "",
    emp_designation: "",
    gender: "",
  });
  console.log(state);
  let { emp_name, emp_salary, emp_designation, gender } = state;
  let handleChange = (e) => {
    // let { name, value } = e.target;
    // setState({ ...state, [name]: value });
    setState({...state,[e.target.name]:e.target.value})
  };

  let handleSubmit =async (e) => {
    e.preventDefault();
    try {
      let payload = { emp_name, emp_salary, emp_designation, gender };
    //   console.log(payload);
      // console.log({emp_name,emp_salary, emp_designation, gender})
      await axiosInstance.post("/employees",payload);
      toast.success("employee details successfully uploaded")
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="formBlock">
      <article>
        <h2>Add Employee</h2>
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
            <button>Add Employee</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default CreateEmployees;
