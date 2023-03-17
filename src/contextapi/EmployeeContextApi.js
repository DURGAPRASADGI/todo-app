import React,{createContext, useEffect, useState} from "react";
import axiosInstance from "../services/AxiosInstance";
import { toast } from "react-toastify";

export let EmployeeApiContext=createContext();

const EmployeeApiProvider=({children})=>{
    let[employees,setEmployees]=useState([]);
    // console.log(employees);
    let[loading,setLoading]=useState(false);
    useEffect(()=>{
        let fetchData= async ()=>{
          try {
            let {data}=await axiosInstance.get("/employees");  //?*!instead of  do let res=await.. let result=res.data we can {data} destructurin
          //  console.log(data);
            setLoading(true);
            setEmployees(data);
          } catch (error) {
            // console.log(error)
            toast.error(error);
          }
          setLoading(false);
        }
        fetchData();
    },[])
    return <EmployeeApiContext.Provider value={{employees,loading}}>
        {children}
    </EmployeeApiContext.Provider>
}
export default EmployeeApiProvider;