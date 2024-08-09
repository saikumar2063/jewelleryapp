import React from "react";

const date = new Date();

const formatTime = (date) => {
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = String(hours).padStart(2, "0");

  return `${hours}:${minutes}:${seconds} ${amPm}`;
};

const formatDate = (dateStr) => {
  const [year, month, day] = dateStr.split("-");
  return `${day}-${month}-${year}`;
};

export default function Receipt({ cartItem, grdTotal, bill }) {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column align-items-center mt-5">
          <h1>Sris Infocity Mart</h1>
          <p className="text-center m-0" style={{ width: 200 }}>
            Infocity Pearl & Jewel,Bhagyalaxmi Nagar-2,
            Serlingampally,Hyderabad,
          </p>
          <p>9988774455</p>
          <p>RECEIPT</p>
        </div>
        <hr className="hr" />
        <div className="d-flex justify-content-between mb-1">
          <div>
            <p className="mb-0">BILL#: SIMRT-{bill.bill_no}</p>
            <p className="mb-0">DATE:{bill.date && formatDate(bill.date)}</p>
            <p className="mb-0">CASHIER: SRIMRT Admin </p>
          </div>
          <div>
            <p className="mb-0">CUST: {bill.cust_no}</p>
            <p className="mb-0">TIME:{formatTime(date)}</p>
            <p className="mb-0">CNTR: SRIMRT-CNT1 </p>
          </div>
        </div>
        <hr className="hr m-0" />

        <table className="table border-collapse col-12">
          <thead>
            <tr>
              <th scope="col">ITEMS</th>
              <th scope="col" className="text-center">
                NET.WT
              </th>
              <th scope="col" className="text-center">
                QTY
              </th>
              <th scope="col" className="text-center">
                RATE
              </th>
              <th scope="col" className="text-end">
                AMOUNT
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((each) => (
              <tr key={each.id}>
                <td>{each.name}</td>
                <td align="center">{each.weight}</td>
                <td align="center">1</td>
                <td align="center">
                  {each.price.toLocaleString("hi-IN", {
                    style: "currency",
                    currency: "INR",
                  })}
                </td>
                <td align="right">
                  {each.price.toLocaleString("hi-IN", {
                    style: "currency",
                    currency: "INR",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <hr className="hr" />
        <div className="d-flex justify-content-between">
          <p>TOTAL</p>
          <p>
            {" "}
            {grdTotal.toLocaleString("hi-IN", {
              style: "currency",
              currency: "INR",
            })}
          </p>
        </div>

        <hr className="hr" />
        <div className="d-flex justify-content-between mb-0">
          <p>CASH TEND</p>
          <p>
            {grdTotal.toLocaleString("hi-IN", {
              style: "currency",
              currency: "INR",
            })}
          </p>
        </div>
        <div className="d-flex justify-content-between mb-0">
          <p>CHANGE</p>
          <p>0</p>
        </div>
        <div className="d-flex justify-content-between mb-0">
          <p>TOTAL ITEMS</p>
          <p>{cartItem.length}</p>
        </div>
        <hr className="hr" />
        <p>Payment Summary</p>
        <p className="mb-0">CASH</p>
        <p>UPI</p>
        <div className="text-center font-weight-bold mb-5">
          Thank You! Visit Again
        </div>
      </div>
    </div>
  );
}
