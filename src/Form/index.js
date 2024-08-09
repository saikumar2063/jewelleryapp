import React, { useState } from "react";

function Form() {
  const [data, setData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: "",
    date: "",
    location: "",
    gender: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(data);
    const response = await fetch("http://localhost:4000/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: data.firstname,
        middlename: data.middlename,
        lastname: data.lastname,
        email: data.email,
        date: data.date,
        location: data.location,
        gender: data.gender,
      }),
    });
    const result = await response.json();

    if (result.Status) {
      window.location.reload(); //to reload window on submitting data and retrievs dat if you want data immediately in UI
    }

    console.log("rsult is" + result);
  };

  return (
    <div className="container">
      <form className="row " onSubmit={handleSubmit}>
        <div className=" d-flex flex-column col-sm-12 col-md-4 col-lg-4  ">
          <label className="m-1 font-weight-bold">First Name</label>
          <input
            className="form-control  m-1"
            type="text"
            placeholder="First Name"
            name="firstname"
            value={data.firstname}
            onChange={(event) => {
              setData({ ...data, [event.target.name]: event.target.value });
            }}
          />
        </div>

        <div className=" d-flex flex-column col-sm-12 col-md-3 col-lg-4  ">
          <label className="m-1 font-weight-bold">Middle Name</label>
          <input
            className="form-control m-1"
            type="text"
            placeholder="Middle Name"
            value={data.middlename}
            name="middlename"
            onChange={(event) => {
              setData({ ...data, [event.target.name]: event.target.value });
            }}
          />
        </div>

        <div className=" d-flex flex-column col-sm-12 col-md-3 col-lg-4  ">
          <label className="m-1 font-weight-bold">Last Name</label>
          <input
            className="form-control m-1"
            type="text"
            placeholder="Last Name"
            value={data.lastname}
            name="lastname"
            onChange={(event) => {
              setData({ ...data, [event.target.name]: event.target.value });
            }}
          />
        </div>

        <div className=" d-flex flex-column col-sm-12 col-md-3 col-lg-4  ">
          <label className="m-1 font-weight-bold">Email</label>
          <input
            className="form-control m-1"
            type="email"
            placeholder="Email Address"
            value={data.email}
            name="email"
            onChange={(event) => {
              setData({ ...data, [event.target.name]: event.target.value });
            }}
          />
        </div>

        <div className=" d-flex flex-column col-sm-12 col-md-4 col-lg-4  ">
          <label className="m-1 font-weight-bold">Date</label>
          <input
            className="form-control m-1"
            type="date"
            placeholder="D.O.B"
            value={data.date}
            name="date"
            onChange={(event) => {
              setData({ ...data, [event.target.name]: event.target.value });
            }}
          />
        </div>

        <div className=" d-flex flex-column col-sm-12 col-md-4 col-lg-4  ">
          <label className="m-1 font-weight-bold">Location</label>
          <input
            list="browsers"
            className="form-control"
            placeholder="Location"
            value={data.location}
            name="location"
            onChange={(event) => {
              setData({ ...data, [event.target.name]: event.target.value });
            }}
          />
          <datalist id="browsers">
            <option value="India" />
            <option value="USA" />
            <option value="China" />
            <option value="Australia" />
            <option value="Japan" />
          </datalist>
        </div>

        <div className="d-flex flex-column col-sm-12 ">
          <label className="m-1 font-weight-bold">Feedback</label>
          <textarea
            className="form-control m-1"
            rows={6}
            placeholder="Feedback"
          />
        </div>

        <div className=" d-flex align-text-top justify-content-between  align-items-center col-sm-12 col-lg-5 border border-secondary m-3">
          <p className=" fs-4 ">Gender</p>
          <div>
            <input
              type="radio"
              name="gender"
              id="Male"
              value="Male"
              checked={data.gender === "Male"}
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
            />
            <label htmlFor="Male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              id="Female"
              value="Female"
              checked={data.gender === "Female"}
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
            />
            <label htmlFor="Female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              id="Others"
              value="Others"
              checked={data.gender === "Others"}
              onChange={(e) => {
                setData({ ...data, [e.target.name]: e.target.value });
              }}
            />
            <label htmlFor="Others">Others</label>
          </div>
        </div>

        {/* <div className="d-flex justify-content-between align-items-center col-sm-12 col-lg-5 border border-secondary m-3  ">
          <p className=" fs-3 ">Fav-color</p>
          <div className="">
            <input type="checkbox" id="blue" value="blue" defaultChecked />
            <label htmlFor="blue">Blue</label>
          </div>
          <div className="">
            <input type="checkbox" id="red" value="red" />
            <label htmlFor="red">Red</label>
          </div>
          <div className="">
            <input type="checkbox" id="yellow" value="yellow" />
            <label htmlFor="yellow">Yellow</label>
          </div>
        </div> */}

        <div className="mt-2 mb-2">
          <input type="file" />
        </div>

        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">Sl.No</th>
              <th scope="col">Product Image</th>
              <th scope="col">Product Description</th>
              <th scope="col">Product price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <img
                  src="https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08192495_1_9.png"
                  alt="laptop"
                  className="form-image border-0"
                />
              </td>
              <td>Laptop</td>
              <td>50,000/-</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2023/3/296178163/GX/GL/SD/186724856/vivo-mobile-phone-1000x1000.jpg"
                  alt="mobile"
                  className="form-image border-0"
                />
              </td>
              <td>vivo Y100</td>
              <td>25,000/-</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                <img
                  src="https://media.croma.com/image/upload/v1667851459/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/249129_0_mds3pq.png"
                  alt="mobile"
                  className="form-image border-0"
                />
              </td>
              <td>Tablet</td>
              <td>20,000/-</td>
            </tr>
          </tbody>
        </table>
        <div>
          <button type="submit" className="bg-danger border-0">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
