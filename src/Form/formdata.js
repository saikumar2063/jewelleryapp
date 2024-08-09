import { useState, useEffect } from "react";
import axios from "axios";

function Formdata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/formdata").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="container ">
      <div className="row pt-3 ">
        <div>
          {data.length > 0 && (
            <div className="container bg-light">
              <div className="row">
                <table className="table table-striped bg-light">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th scope="col">Firstname</th>
                      <th scope="col">Middlename</th>
                      <th scope="col">Lastname</th>
                      <th scope="col">Email</th>
                      <th scope="col">Date</th>
                      <th scope="col">Location</th>
                      <th scope="col">Gender</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.firstname}</td>
                        <td>{item.middlename}</td>
                        <td>{item.lastname}</td>
                        <td>{item.email}</td>
                        <td>{new Date(item.date).toLocaleDateString()}</td>
                        <td>{item.location}</td>
                        <td>{item.gender}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Formdata;
