import React, { useEffect, useState } from "react";
import axios from "axios";
import Registrations from "./registrations";
function Employee() {
  const [data, setData] = useState([]);

  const [employee, setEmployee] = useState({
    employee_id: "",
    employee_name: "",
    bio_id: "",
    mobile_no: "",
    doj: "",
    dob: "",
    designation: "",
    gender: "Male",
    branch: "",
    rfid: "",
    file: "",
    email: "",
    department: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/employeedata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        emp_id: employee.employee_id,
        emp_name: employee.employee_name,
        bio_id: employee.bio_id,
        mobile_no: employee.mobile_no,
        doj: employee.doj,
        dob: employee.dob,
        designation: employee.designation,
        gender: employee.gender,
        branch: employee.branch,
        rfid: employee.rfid,
        file: employee.file,
        email: employee.email,
        department: employee.department,
      }),
    });
    const result = await response.json();

    if (result.Status) {
      window.location.reload(); //to reload window on submitting data and retrievs dat if you want data immediately in UI
    }
  };

  useEffect(() => {
    axios.get("http://localhost:4000/employee").then((response) => {
      setData(response.data);
    });
  }, [data]);

  return (
    <div>
      <div className="container">
        <h1 className="fs-4">Add Employee</h1>
        <hr />
        <form className="row m-4" onSubmit={handleSubmit}>
          <div className="col d-flex flex-column col-12 col-lg-4 mb-1" id="emp">
            <label className="font-weight-bold mb-1">Emp ID:</label>
            <input
              required
              className="form-control"
              type="number"
              placeholder="Employee id"
              name="employee_id"
              value={employee.employee_id}
              onChange={(event) => {
                setEmployee({
                  ...employee,
                  [event.target.name]: event.target.value,
                });
              }}
            />
          </div>

          <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
            <label className="font-weight-bold mb-1">Emp Name:</label>
            <input
              required
              className="form-control"
              type="text"
              placeholder="Employee Name"
              name="employee_name"
              value={employee.employee_name}
              onChange={(event) => {
                setEmployee({
                  ...employee,
                  [event.target.name]: event.target.value,
                });
              }}
            />
            {/* {!employee.employee_name && <p className='text-warning'>Required*</p>} */}
          </div>

          <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
            <label className="font-weight-bold mb-1">Biometric ID:</label>
            <input
              required
              className="form-control"
              type="number"
              placeholder="Biometric id"
              name="bio_id"
              value={employee.bio_id}
              onChange={(event) => {
                setEmployee({
                  ...employee,
                  [event.target.name]: event.target.value,
                });
              }}
            />
          </div>

          <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
            <label className="font-weight-bold mb-1">Mobile</label>
            <input
              required
              className="form-control"
              type="text"
              placeholder="Mobile"
              name="mobile_no"
              value={employee.mobile_no}
              onChange={(event) => {
                setEmployee({
                  ...employee,
                  [event.target.name]: event.target.value,
                });
              }}
            />
          </div>

          <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
            <label className="font-weight-bold mb-1">DOJ</label>
            <input
              className="form-control"
              type="date"
              name="doj"
              value={employee.doj}
              onChange={(event) => {
                setEmployee({
                  ...employee,
                  [event.target.name]: event.target.value,
                });
              }}
            />
          </div>

          <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
            <label className="font-weight-bold mb-1">DOB</label>
            <input
              className="form-control"
              type="date"
              name="dob"
              value={employee.dob}
              onChange={(event) => {
                setEmployee({
                  ...employee,
                  [event.target.name]: event.target.value,
                });
              }}
            />
          </div>

          <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
            <label className="font-weight-bold mb-1">Designation</label>
            <input
              className="form-control"
              type="text"
              placeholder="Designation"
              name="designation"
              value={employee.designation}
              onChange={(event) => {
                setEmployee({
                  ...employee,
                  [event.target.name]: event.target.value,
                });
              }}
            />
          </div>

          <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
            <label className="font-weight-bold mb-1">Gender</label>
            <select
              className="form-control"
              name="gender"
              value={employee.gender}
              onChange={(event) => {
                setEmployee({
                  ...employee,
                  [event.target.name]: event.target.value,
                });
              }}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
            <label className="font-weight-bold mb-1">Department</label>
            <input
              required
              className="form-control"
              type="text"
              placeholder="Department"
              name="department"
              value={employee.department}
              onChange={(event) => {
                setEmployee({
                  ...employee,
                  [event.target.name]: event.target.value,
                });
              }}
            />
          </div>

          <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
            <label className="font-weight-bold mb-1">Branch</label>
            <input
              required
              className="form-control"
              type="text"
              placeholder="Branch"
              name="branch"
              value={employee.branch}
              onChange={(event) => {
                setEmployee({
                  ...employee,
                  [event.target.name]: event.target.value,
                });
              }}
            />
          </div>

          <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
            <label className="font-weight-bold mb-1">RFID</label>
            <input
              className="form-control"
              type="number"
              placeholder="Rfid"
              name="rfid"
              value={employee.rfid}
              onChange={(event) => {
                setEmployee({
                  ...employee,
                  [event.target.name]: event.target.value,
                });
              }}
            />
          </div>

          <div className="col d-flex flex-column col-12 col-lg-4 mb-1">
            <label className="font-weight-bold mb-1">Email</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your email"
              name="email"
              value={employee.email}
              onChange={(event) => {
                setEmployee({
                  ...employee,
                  [event.target.name]: event.target.value,
                });
              }}
            />
          </div>

          <div className="mt-2 mb-2">
            <input
              type="file"
              name="file"
              value={employee.file}
              onChange={(event) => {
                setEmployee({
                  ...employee,
                  [event.target.name]: event.target.value,
                });
              }}
            />
          </div>

          <div className="d-flex justify-content-end mt-2">
            <button
              type="submit"
              className="bg bg-primary border-0 rounded text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Employee;

// function EmpData({ data }) {
//   return (
//     <div className="container-fluid ">
//       <div className="row pt-3 ">
//         <div>
//           {data.length > 0 && (
//             <div className="container bg-light">
//               <div className="row">
//                 <table className="table table-hover overflow-auto table-responsive bg-light">
//                   <thead>
//                     <tr>
//                       <th className="bg-transparent" scope="col">
//                         S.NO
//                       </th>
//                       <th className="bg-transparent" scope="col">
//                         EMP ID
//                       </th>
//                       <th className="bg-transparent" scope="col">
//                         NAME
//                       </th>
//                       <th className="bg-transparent" scope="col">
//                         BIOMETRIC
//                       </th>
//                       <th className="bg-transparent" scope="col">
//                         MOBILE
//                       </th>
//                       <th className="bg-transparent" scope="col">
//                         DESIGNATION
//                       </th>
//                       <th className="bg-transparent" scope="col">
//                         DEPARTMENT
//                       </th>
//                       <th className="bg-transparent" scope="col">
//                         ACTIONS
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data.map((item, index) => (
//                       <tr key={index}>
//                         <td>{index + 1}</td>
//                         <td>{item.emp_id}</td>
//                         <td>{item.emp_name}</td>
//                         <td>{item.bio_id}</td>
//                         <td>{item.mobile_no}</td>
//                         {/* <td>{new Date(item.doj).toLocaleDateString()}</td> */}
//                         <td>{item.designation}</td>
//                         <td>{item.department}</td>
//                         <td>
//                           <i className="fa-regular fa-pen-to-square   text-primary"></i>
//                           <i className="fa-solid fa-trash   text-danger mx-5"></i>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
