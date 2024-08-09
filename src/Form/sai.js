import React, { createRef, useState } from "react";
// import axios from "axios";
import { ReactToPrint } from "react-to-print";
// import { useReactToPrint } from "react-to-print";

function Sai(props) {
  const [show, setShow] = useState(true);
  const componentRef = createRef();
  const { userData } = props;

  const handleClose = () => {
    console.log(show);
    setShow(!show);
    window.location.reload();
  };

  // const handlePrint = () => {
  //   const element = document.getElementById("user");

  //   document.getElementById("button").style.display = "none";

  //   window.print(element);

  //   window.location.reload();
  // };

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

  return (
    <div>
      {show && (
        <div>
          <div className="row">
            <div id="user" ref={componentRef} className="container">
              <div className="row ">
                <img
                  src="https://perennialcode.in/wp-content/uploads/2023/11/cropped-pc_logo-3.jpg"
                  alt="logo"
                  className="mt-3 mb-3"
                  style={{ width: "200px" }}
                />
                <table className="table table-striped border-collapse">
                  <tbody>
                    <tr>
                      <td className="w-50">Employee Name</td>
                      <td>:</td>
                      <td>{userData.emp_name}</td>
                    </tr>
                    <tr>
                      <td>Employee ID</td>
                      <td>:</td>
                      <td>{userData.emp_id}</td>
                    </tr>
                    <tr>
                      <td>Mobile No</td>
                      <td>:</td>
                      <td>{userData.mobile_no}</td>
                    </tr>
                    <tr>
                      <td>Biometric</td>
                      <td>:</td>
                      <td>{userData.bio_id}</td>
                    </tr>
                    <tr>
                      <td>Date of joining</td>
                      <td>:</td>

                      <td>{new Date(userData.doj).toLocaleDateString()}</td>
                    </tr>
                    <tr>
                      <td>Date of birth</td>
                      <td>:</td>
                      <td>{new Date(userData.dob).toLocaleDateString()}</td>
                    </tr>
                    <tr>
                      <td>Gender</td>
                      <td>:</td>
                      <td>{userData.gender}</td>
                    </tr>
                    <tr>
                      <td>Designation</td>
                      <td>:</td>
                      <td>{userData.designation}</td>
                    </tr>
                    <tr>
                      <td>Email Address</td>
                      <td>:</td>
                      <td>{userData.email}</td>
                    </tr>
                    <tr>
                      <td>Branch</td>
                      <td>:</td>
                      <td>{userData.branch}</td>
                    </tr>
                    <tr>
                      <td>Department</td>
                      <td>:</td>
                      <td>{userData.department}</td>
                    </tr>
                    <tr>
                      <td>RFID</td>
                      <td>:</td>
                      <td>{userData.rfid}</td>
                    </tr>
                    <tr>
                      <td className="flex-wrap">
                        Whether qualified for promotion
                      </td>
                      <td>:</td>
                      <td>YES</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-2 mb-2 ">
              <ReactToPrint
                trigger={() => {
                  return (
                    <button
                      className=" border-0 rounded text-white"
                      onClick={() => window.location.reload()}
                    >
                      <i className="fa-solid fa-print bg bg-white text-dark border-0 rounded mt-2 cursor-pointer"></i>
                    </button>
                  );
                }}
                content={() => componentRef.current}
              />
              <button
                id="button"
                onClick={handleClose}
                className="bg-secondary border-0 rounded text-white mx-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sai;
