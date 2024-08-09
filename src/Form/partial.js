import React, { useEffect, useState } from "react";

function Partial() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:4000/employee");
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data); // Update state with fetched data
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsers(); // Call the async function

    setInterval(() => {
      fetchUsers();
      console.log("Hello");
    }, 60000); // 60000 milliseconds = 1 minute
  }, []);

  return (
    <div className="col-12 col-md-10 col-lg-12 overflow-auto ">
      <table className="table  table-responsive">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Employee name</th>
            <th scope="col">Emp Id</th>
            <th scope="col">Mobile No</th>
          </tr>
        </thead>
        <tbody>
          {data.map((each, index) => (
            <tr key={index + 1}>
              <th scope="row">{index + 1}</th>
              <td>{each.emp_name}</td>
              <td>{each.emp_id}</td>
              <td>{each.mobile_no}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Partial;
