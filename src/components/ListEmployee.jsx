import React, { useState, useEffect } from "react";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import { AddEmployeeButton } from "./AddEmployeeButton";
import { useNavigate } from "react-router-dom";
export const ListEmployee = () => {
  // const dummyData = [
  //   {
  //     id: 1,
  //     firstName: "Manoj",
  //     lastName: "Nahak",
  //     email: "mn@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     firstName: "Brajendra",
  //     lastName: "Moda",
  //     email: "bm@gmail.com",
  //   },
  //   {
  //     id: 3,
  //     firstName: "Aditya",
  //     lastName: "Sinha",
  //     email: "as@gmail.com",
  //   },
  // ];

  const [Employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllEmployee();
  }, []);
  function getAllEmployee() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function updateEmployee(id) {
    navigate(`/update-employee/${id}`);
  }

  function removeEmployee(id) {
    console.log(id);
    deleteEmployee(id)
      .then((response) => {
        getAllEmployee();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="container align-items-center">
      <h1 className="text-center text-primary mt-5">List Employees</h1>
      <AddEmployeeButton />
      <table className="table table-striped table-bordered mt-3 text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => removeEmployee(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
