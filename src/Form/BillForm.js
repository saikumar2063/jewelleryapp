import { useState } from "react";

function BillForm({ addToCart }) {
  // const [cartItem, setCartItem] = useState({});
  const [addBill, setAddBill] = useState({
    // itemId: productId,
    bill_no: "",
    cust_name: "",
    address: "",
    mobile_no: "",
    date: "",
    cashier: "",
    counter: "",
    item: "",
    quantity: "",
    rate: "",
    weight: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCartItem(addBill);
    // addToCart(cartItem);
    addToCart(addBill);
    // setAddBill((prevAddBill) => ({
    //   ...prevAddBill,
    //   item: e.targetvalue,
    // }));
    console.log("from bill form", addBill);

    // console.log(customers);
    // console.log(productId);
    // console.log(new Date().toLocaleTimeString());
    setAddBill({
      // itemId: productId,
      bill_no: "",
      cust_name: "",
      address: "",
      mobile_no: "",
      date: "",
      cashier: "",
      counter: "",
      item: "",
      quantity: "",
      rate: "",
      weight: "",
    });
  };

  return (
    <div className="container ">
      <div className="row bg-light justify-content-md-center justify-content-lg-start  rounded pb-3 pt-3 overflow-auto">
        <div className="text-center text-warning text-decoration-underline">
          <h1>Billing Details</h1>
        </div>

        <div className="col-md-5 col-lg-4">
          <label htmlFor="name">Customer Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Customer Name "
            name="cust_name"
            onChange={(event) => {
              setAddBill({
                ...addBill,
                [event.target.name]: event.target.value,
              });
            }}
            value={addBill.name}
          />
        </div>

        <div className="col-md-5 col-lg-4">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter your Address"
            name="address"
            onChange={(event) => {
              setAddBill({
                ...addBill,
                [event.target.name]: event.target.value,
              });
            }}
            value={addBill.address}
          />
        </div>

        <div className="col-md-5 col-lg-4">
          <label htmlFor="mobile_no">Mobile No:</label>
          <input
            type="text"
            className="form-control"
            id="mobile_no"
            placeholder="Mobile No"
            name="mobile_no"
            onChange={(event) => {
              setAddBill({
                ...addBill,
                [event.target.name]: event.target.value,
              });
            }}
            value={addBill.mobile_no}
          />
        </div>

        <div className="col-md-5 col-lg-4">
          <label htmlFor="bill_no">Bill No:</label>
          <input
            type="text"
            className="form-control"
            id="bill_no"
            placeholder="Bill No"
            name="bill_no"
            onChange={(event) => {
              setAddBill({
                ...addBill,
                [event.target.name]: event.target.value,
              });
            }}
            value={addBill.bill_no}
          />
        </div>

        <div className="col-md-5 col-lg-4">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            onChange={(event) => {
              setAddBill({
                ...addBill,
                [event.target.name]: event.target.value,
              });
            }}
            value={addBill.date}
          />
        </div>

        <div className="col-md-5 col-lg-4">
          <label htmlFor="cashier">Cashier</label>
          <input
            type="text"
            className="form-control"
            id="cashier"
            placeholder="Cashier name"
            name="cashier"
            onChange={(event) => {
              setAddBill({
                ...addBill,
                [event.target.name]: event.target.value,
              });
            }}
            value={addBill.cashier}
          />
        </div>

        <div className="col-md-5 col-lg-4">
          <label htmlFor="counter">Counter</label>
          <input
            type="text"
            className="form-control"
            id="counter"
            placeholder="Counter No"
            name="counter"
            onChange={(event) => {
              setAddBill({
                ...addBill,
                [event.target.name]: event.target.value,
              });
            }}
            value={addBill.counter}
          />
        </div>

        <div className="col-md-5 col-lg-4">
          <label htmlFor="item">Item</label>
          {/* <input
            type="text"
            className="form-control"
            id="item"
            placeholder="Item Name"
            name="item"
            onChange={(event) => {
              setAddBill({
                ...addBill,
                [event.target.name]: event.target.value,
              });
            }}
            value={addBill.item}
          /> */}
          <select
            className="form-control form-select"
            aria-label="Default select example"
            name="item"
            id="item"
            onChange={(event) => {
              setAddBill({
                ...addBill,
                [event.target.name]: event.target.value,
              });
            }}
          >
            <option>Select the item</option>
            <option value="Bracelet">Bracelet</option>
            <option value="Chain">Chain</option>
            <option value="Ring">Ring</option>
          </select>
        </div>

        <div className="col-md-5 col-lg-4">
          <label htmlFor="qunatity">Qunatity</label>
          <input
            type="number"
            className="form-control"
            id="qunatity"
            placeholder="Qunatity"
            name="quantity"
            onChange={(event) => {
              setAddBill({
                ...addBill,
                [event.target.name]: event.target.value,
              });
            }}
            onWheel={(e) => e.target.blur()}
            value={addBill.quantity}
          />
        </div>

        <div className="col-md-5 col-lg-4">
          <label htmlFor="rate">Rate</label>
          <input
            type="number"
            className="form-control"
            id="rate"
            placeholder="Rate per gram"
            name="rate"
            onChange={(event) => {
              setAddBill({
                ...addBill,
                [event.target.name]: event.target.value,
              });
            }}
            onWheel={(e) => e.target.blur()}
            value={addBill.rate}
          />
        </div>

        <div className="col-md-5 col-lg-4">
          <label htmlFor="weight">Weight in grams</label>
          <input
            type="number"
            className="form-control"
            id="weight"
            placeholder="Weight in grams"
            name="weight"
            onChange={(event) => {
              setAddBill({
                ...addBill,
                [event.target.name]: event.target.value,
              });
            }}
            onWheel={(e) => e.target.blur()}
            value={addBill.weight}
          />
        </div>

        <div className="d-flex justify-content-lg-end justify-content-md-center mt-2">
          <button
            className="bg bg-primary border-0  rounded text-white mt-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default BillForm;
