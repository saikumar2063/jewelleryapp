import React, { useEffect, useState } from "react";

import IbizLogo from "../Assests/Images/ibizlogo.jpg";
import { v4 as uuid } from "uuid";

const tabsList = [
  { tabId: "Gold & Silver", displayText: "Gold & Silver" },
  { tabId: "Vegetables", displayText: "Vegetables" },
  { tabId: "Clothes", displayText: "Clothes" },
  { tabId: "FMCG", displayText: "FMCG" },
  { tabId: "Fruits", displayText: "Fruits" },
  { tabId: "Meat", displayText: "Meat" },
  { tabId: "Sneakers", displayText: "Sneakers" },
  { tabId: "Sports Shoes", displayText: "Sports Shoes" },
  { tabId: "Bakery", displayText: "Bakery" },
  { tabId: "Fertilizers", displayText: "Fertilizers" },
  { tabId: "Restaurant", displayText: "Restaurant" },
  { tabId: "T.V", displayText: "T.V" },
  { tabId: "Mobiles", displayText: "Mobiles" },
  { tabId: "Fridge", displayText: "Fridge" },
  { tabId: "Laptop", displayText: "Laptop" },
  { tabId: "washingmachine", displayText: "washingmachine" },
];
const products = [
  {
    id: uuid(),
    name: "Vaddanam",
    category: "Gold & Silver",
    material: "gold",
    image:
      "https://kameswarijewellers.in/wp-content/uploads/sites/494/2023/05/VD.jpg",
  },
  {
    id: uuid(),
    name: "Ring",
    category: "Gold & Silver",
    material: "gold",
    image:
      "https://t4.ftcdn.net/jpg/00/71/67/87/360_F_71678766_kPinbw5YXRSJrlwwT8SmA90TgjBu64Ng.jpg",
  },
  {
    id: uuid(),
    name: "Bracelet",
    category: "Gold & Silver",
    material: "gold",
    image:
      "https://t4.ftcdn.net/jpg/05/84/41/65/360_F_584416508_eDB9BQA99eNiJg7YOE63WY8tV57jiPI6.jpg",
  },
  {
    id: uuid(),
    name: "Chain",
    category: "Gold & Silver",
    material: "gold",
    image:
      "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/858/1662475105_c51e1a4334b8547cd10f.jpg",
  },

  {
    id: uuid(),
    name: "Silver Plates",
    category: "Gold & Silver",
    material: "silver",
    image:
      "https://m.media-amazon.com/images/I/71lwlyr+L9L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: uuid(),
    name: "Silver Spoons",
    category: "Gold & Silver",
    material: "silver",
    image:
      "https://img.freepik.com/premium-photo/stack-antique-silver-spoons-each-with-unique-pattern-design-created-with-generative-ai_762026-3241.jpg",
  },
  {
    id: uuid(),
    name: "Silver Bangles",
    category: "Gold & Silver",
    material: "silver",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1rOW7VRyFWxrxAz79tdyu85nTxR6SXiizg&s",
  },
  {
    id: uuid(),
    name: "Kalasam",
    category: "Gold & Silver",
    material: "silver",
    image:
      "https://cdnmedia-breeze.vaibhavjewellers.com/media/catalog/product/image/17405c868/antique-embossed-silver-kalasam-chembu-334va1132-334va1132.jpg",
  },
  {
    id: uuid(),
    name: "Silver pooja Thaali",
    category: "Gold & Silver",
    material: "silver",
    image:
      "https://silverstore.in/cdn/shop/files/silver-pooja-thali-set-925-10-size-pack-of-386_1024x1024.png?v=1694682740",
  },
  {
    id: uuid(),
    name: "Silver bowl",
    category: "Gold & Silver",
    material: "silver",
    image:
      "https://puresilver.io/cdn/shop/products/80_ab5574fb-24e5-400d-aed9-2941d9bd0340.jpg?v=1612974025",
  },
  {
    id: uuid(),
    name: "Tomato",
    category: "Vegetables",
    image:
      "https://png.pngtree.com/png-clipart/20230113/ourmid/pngtree-red-fresh-tomato-with-green-leaf-png-image_6561484.png",
  },
  {
    id: uuid(),
    name: "Potato",
    category: "Vegetables",
    image:
      "https://png.pngtree.com/png-clipart/20220125/original/pngtree-yellow-potatoes-png-image_7220324.png",
  },
  {
    id: uuid(),
    name: "Onion",
    category: "Vegetables",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzOGI64o1FGrzuXlumrqom6-X_cc3ECq-Mqw&s",
  },
  {
    id: uuid(),
    name: "Shirts",
    price: 1500,
    category: "Clothes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiqXOou9bo0QNe9hKpPzu8BF4rAOzvdg5SBg&s",
  },
  {
    id: uuid(),
    name: "T-Shirts",
    price: 500,
    category: "Clothes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6CpNu6IVeynQ-mtDoFUJcbtXhuivqaT3Mg&s",
  },
  {
    id: uuid(),
    name: "Jeans",
    price: 2000,
    category: "Clothes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNvxSsk04ywSJMXcDFFr7FU6HHbhqN2hx8Hw&s",
  },
];

function Products() {
  const [goldRate, setGoldRate] = useState(6815);
  const [silverRate, setSilverRate] = useState(95.6);
  const [itemId, setitemId] = useState(tabsList[0].tabId);
  const [newProducts, setNewProducts] = useState(products);
  const [cartItem, setCartItem] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [payUp, setPayUp] = useState(false);
  const [weight, setWeight] = useState(0);
  const [making, setmaking] = useState(0);
  const [others, setOthers] = useState(0);
  const [grdTotal, setGrdTotal] = useState(0);
  const [details, setDetails] = useState([]);
  const [bill, setBill] = useState({
    bill_no: "",
    date: "",
    cust_no: "",
  });
  const [payDetails, setpayDetails] = useState({
    cust_name: "",
    sale_by: "kumar",
    payment_type: "UPI",
  });

  const handlePayment = () => {
    setPayUp(!payUp);
  };

  const handlePayUp = () => {
    setPayUp(!payUp);
  };

  const handletotalbill = () => {
    console.log(payDetails);
  };

  const handleFilterChange = (e) => {
    setitemId(e.target.value); //gets id of the tab
  };

  const handleProductsChange = (e) => {
    // console.log(e.target.value);
    const filtered = products.filter(
      (eachitem) => eachitem.name === e.target.value
    );
    // setCartItem([...cartItem, filtered[0]]);
    // console.log(filtered[0]);
    if (!filtered[0].price) {
      setIsOpen(!isOpen);
      setDetails((prevDetails) => ({
        ...prevDetails,
        name: filtered[0].name,
        image: filtered[0].image,
        id: filtered[0].id,
        category: filtered[0].category,
        material: filtered[0].material,
      }));
    } else {
      const isAlreadyInCart = cartItem.some(
        (item) => item.id === filtered[0].id
      );
      if (!isAlreadyInCart) {
        setCartItem([...cartItem, filtered[0]]);
      }
      // setCartItem([...cartItem, row]);
      // console.log("onClicking image cartItem:", cartItem);
    }
  };

  const onClickImage = (row) => {
    // console.log(row);
    if (!row.price) {
      setIsOpen(!isOpen);
      setDetails((prevDetails) => ({
        ...prevDetails,
        name: row.name,
        image: row.image,
        id: row.id,
        category: row.category,
        material: row.material,
      }));
    } else {
      const isAlreadyInCart = cartItem.some((item) => item.id === row.id);
      if (!isAlreadyInCart) {
        setCartItem([...cartItem, row]);
      }
      // setCartItem([...cartItem, row]);
      // console.log("onClicking image cartItem:", cartItem);
    }
  };

  const handleCategory = (tab) => {
    setitemId(tab.tabId);
    console.log(tab.tabId);
  };

  const handleCancel = () => {
    setCartItem([]);
  };

  const toggleClose = () => {
    setIsOpen(!isOpen);
    setWeight(0);
    setmaking(0);
    setOthers(0);
  };

  const handleAdd = () => {
    setIsOpen(!isOpen);
    const productMade = details.material;
    let price = 0;
    if (productMade === "silver") {
      price = silverRate * weight + making + others;
    } else if (productMade === "gold") {
      price = goldRate * weight + making + others;
    } else {
      price = weight * making;
    }
    const newProduct = {
      id: details.id,
      name: details.name,
      image: details.image,
      category: details.category,
      weight: weight,
      making: making,
      others: others,
      price: price,
      bill_no: bill.bill_no,
      date: bill.date,
      cust_no: bill.cust_no,
    };

    setWeight(0);
    setmaking(0);
    setOthers(0);

    const isAlreadyInCart = cartItem.some((item) => item.id === newProduct.id);
    if (!isAlreadyInCart) {
      setCartItem([...cartItem, newProduct]);
    }
    // console.log(newProduct);
    // console.log(cartItem);
  };

  useEffect(() => {
    // console.log(details);
    const filtered = products.filter(
      (eachitem) => eachitem.category === itemId
    );

    // console.log(bill);
    if (cartItem.length === 0) {
      setGrdTotal(0);
    } else {
      let amount = 0;
      for (let i = 0; i < cartItem.length; i++) {
        amount = amount + cartItem[i].price;
      }
      setGrdTotal(amount);
    }

    // console.log(details.material);
    setNewProducts(filtered);
    setCartItem(cartItem);

    // console.log("from products", cartItem);

    const handleKeyDown = (event) => {
      if (event.key === "F6") {
        event.preventDefault();
        if (isOpen) return; // Do not proceed if a popup is open

        let newSilverRate;
        let newGoldRate;

        // Loop until a valid number is entered

        while (true) {
          newGoldRate = prompt("Enter Gold Price per gram");

          // Check if the input is not null and is a valid number
          if (
            newGoldRate !== null &&
            !isNaN(newGoldRate) &&
            newGoldRate.trim() !== ""
          ) {
            // Input is valid
            setGoldRate(newGoldRate);
            break; // Exit the loop
          } else {
            // Input is invalid
            alert("Enter a valid number");
          }
        }

        while (true) {
          newSilverRate = prompt("Enter Silver Price per gram");

          // Check if the input is not null and is a valid number
          if (
            newSilverRate !== null &&
            !isNaN(newSilverRate) &&
            newSilverRate.trim() !== ""
          ) {
            // Input is valid
            setSilverRate(newSilverRate);
            break; // Exit the loop
          } else {
            // Input is invalid
            alert("Enter a valid number");
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [itemId, cartItem, details, goldRate, bill, isOpen]);

  const onDelete = (row) => {
    // console.log("ondeleting item", row);
    const deletedItem = cartItem.filter((each) => each.id !== row.id);
    // console.log(deletedItem);
    setCartItem(deletedItem);
  };

  return (
    <div className="container">
      <div className="row ">
        {/* CODE FOR CATEGORIES */}
        <div
          className="col-lg-2 d-none d-lg-block overflow-auto wrapper bg-light"
          style={{ height: "50em" }}
        >
          <img src={IbizLogo} className="ibizlogo" alt="logo" />
          <h6 className="m-0">iBizAccounts</h6>
          <p className="m-0">Billing</p>

          {tabsList.map((tab) => (
            <div
              className="border  align-center text-center pt-1 pb-1 displytext rounded mb-2"
              key={tab.tabId}
            >
              <button
                data-toggle="tooltip"
                data-placement="bottom"
                title={tab.displayText}
                className="border-0 text-white  bg-transparent overflow-hidden  "
                onClick={() => handleCategory(tab)}
              >
                {tab.displayText}
              </button>
            </div>
          ))}
        </div>
        {/* CODE FOR PRODUCTS VIEW AND CART */}
        <div className="col-lg-10 bg-light p-0 ">
          <div
            className="d-flex  align-items-center pl-5"
            style={{ height: 80 }}
          >
            <div
              className="border rounded-circle d-flex justify-content-center align-items-center"
              style={{ height: 50, width: 50 }}
            >
              <i className="fa-solid fa-house  fa-2xl"></i>
            </div>
            <div className="  mb-3 mt-3  pl-3 pr-3">
              <label htmlFor="selectproducts" className="mb-0">
                Select Product
              </label>
              <select
                className="form-select "
                style={{ width: 200 }}
                aria-label="Default select example"
                onChange={handleProductsChange}
                id="selectproducts"
              >
                <option value="Select">Select</option>
                {products.map((tab) => (
                  <option value={tab.name} key={tab.id}>
                    {tab.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="d-none d-md-block">
              <label
                htmlFor="goldPrice"
                className="mb-0"
                style={{ width: 150 }}
              >
                Gold Price (F6)
              </label>
              <input
                type="text"
                id="goldPrice"
                className="form-control"
                placeholder="1grm Price"
                style={{ width: 120 }}
                value={goldRate}
                onChange={(e) => e.target.value}
              />
            </div>
            <div className="d-none d-md-block">
              <label
                htmlFor="silverPrice"
                className="mb-0"
                style={{ width: 150 }}
              >
                Silver Price (F6)
              </label>
              <input
                type="text"
                id="silverPrice"
                className="form-control"
                placeholder="1grm Price"
                style={{ width: 120 }}
                value={silverRate}
                onChange={(e) => e.target.value}
              />
            </div>
          </div>

          <div className=" d-lg-flex p-0 ">
            {/* FOR PRODUCTS VIEW */}
            <div className="col-12 col-lg-8  bg-light pl-0 pt-2 pb-2 pr-3 ">
              <div
                className="d-flex flex-column flex-lg-row justify-content-between align-items-start
              "
              >
                <select
                  className="form-select d-md-none  mb-3 mt-3 col-sm-12 col-lg-3  mt-3 align-start"
                  style={{ width: 200 }}
                  aria-label="Default select example"
                  onChange={handleFilterChange}
                  id="select"
                >
                  {tabsList.map((tab) => (
                    <option value={tab.displayText} key={tab.tabId}>
                      {tab.displayText}
                    </option>
                  ))}
                </select>
                {/* GOLD PRICE SILVER PRICE  */}
                <div className="d-flex flex-column flex-lg-row d-md-none  justify-content-start ">
                  <div className="col-sm-12 col-lg-3 ">
                    <label htmlFor="goldPrice" style={{ width: 150 }}>
                      Gold Price (F6)
                    </label>
                    <input
                      type="text"
                      id="goldPrice"
                      placeholder="1grm Price"
                      style={{ width: 120 }}
                      value={goldRate}
                      onChange={(e) => e.target.value}
                    />
                  </div>
                  <div className="col-sm-12 col-lg-3">
                    <label htmlFor="silverPrice" style={{ width: 150 }}>
                      Silver Price (F6)
                    </label>
                    <input
                      type="text"
                      id="silverPrice"
                      placeholder="1grm Price"
                      style={{ width: 120 }}
                      value={silverRate}
                      onChange={(e) => e.target.value}
                    />
                  </div>
                </div>
              </div>

              {/* Products  */}
              <div className="col-lg-12 d-flex flex-wrap justify-content-center justify-content-md-start  ">
                {newProducts.map((each) => (
                  <li
                    className="list-group   border rounded bg-white m-1 "
                    key={each.id}
                    style={{ width: 120 }}
                  >
                    <button
                      className=" bg-transparent border-0 align-left
                     p-0"
                      onClick={() => onClickImage(each)}
                    >
                      <img
                        className=""
                        style={{ width: 100, height: 100 }}
                        src={each.image}
                        alt="Card "
                      />

                      <div className="card-body p-0">
                        <p
                          className="card-text text-center"
                          style={{ width: 120 }}
                        >
                          {each.name}
                        </p>
                      </div>
                    </button>

                    {/* POPUP  */}
                    {isOpen && (
                      <div className="popup">
                        <div className="d-flex flex-column popup-content text-white bg-secondary text-dark  p-1">
                          <div className="d-flex justify-content-center  align-items-center  p-1   ">
                            <h5 className="pt-2">Estimation </h5>

                            <div className="d-flex flex-column ps-3">
                              <label htmlFor="goldPrice">Gold Price</label>
                              <input
                                type="text"
                                id="goldPrice"
                                style={{ width: 100 }}
                                placeholder="1grm Price"
                                value={goldRate}
                                readOnly={true}
                              />
                            </div>
                            <div className="d-flex flex-column ps-3">
                              <label htmlFor="silverPrice">Silver Price</label>
                              <input
                                type="text"
                                id="silverPrice"
                                style={{ width: 100 }}
                                placeholder="1grm Price"
                                value={silverRate}
                                readOnly={true}
                              />
                            </div>
                            <p
                              style={{ cursor: "pointer" }}
                              className="text-dark d-flex ms-auto"
                            >
                              <i
                                className="fa-solid fa-xmark"
                                onClick={toggleClose}
                              ></i>
                            </p>
                          </div>
                          <hr></hr>
                          <div className="d-flex px-2">
                            <div className="text-center">
                              <img
                                src={details.image}
                                alt={details.name}
                                style={{ width: 150, height: 150 }}
                              />
                              <p className="card-text text-left">
                                {details.name}
                              </p>
                            </div>
                            <div className="px-2">
                              <div>
                                <label htmlFor="weight" style={{ width: 100 }}>
                                  Weight
                                </label>
                                <input
                                  type="number"
                                  id="weight"
                                  style={{ width: 100 }}
                                  value={weight}
                                  onChange={(e) =>
                                    setWeight(Number(e.target.value))
                                  }
                                  onWheel={(e) => e.target.blur()}
                                />
                              </div>

                              <div>
                                <label htmlFor="making" style={{ width: 100 }}>
                                  MCR
                                </label>
                                <input
                                  type="number"
                                  id="making"
                                  style={{ width: 100 }}
                                  value={making}
                                  onChange={(e) =>
                                    setmaking(Number(e.target.value))
                                  }
                                  onWheel={(e) => e.target.blur()}
                                />
                              </div>

                              <div>
                                <label htmlFor="others" style={{ width: 100 }}>
                                  Others
                                </label>
                                <input
                                  type="number"
                                  id="others"
                                  className="align-right"
                                  style={{ width: 100 }}
                                  value={others}
                                  onChange={(e) =>
                                    setOthers(Number(e.target.value))
                                  }
                                  onWheel={(e) => e.target.blur()}
                                />
                              </div>

                              {details.material === "silver" && (
                                <div className="d-flex">
                                  <label htmlFor="total" style={{ width: 100 }}>
                                    Total
                                    {/* <span style={{ width: 100 }}>
                                {silverRate * weight + (making + others)}
                              </span> */}
                                  </label>
                                  <input
                                    type="text"
                                    id="total"
                                    className="align-right"
                                    style={{ width: 100 }}
                                    value={
                                      silverRate * weight + (making + others)
                                    }
                                    readOnly={true}
                                  />
                                </div>
                              )}
                              {details.material === "gold" && (
                                <div className="d-flex">
                                  <label htmlFor="total" style={{ width: 100 }}>
                                    Total
                                    {/* <span style={{ width: 100 }}>
                              {silverRate * weight + (making + others)}
                            </span> */}
                                  </label>
                                  <input
                                    type="text"
                                    id="total"
                                    className="align-right"
                                    style={{ width: 100 }}
                                    value={
                                      goldRate * weight + (making + others)
                                    }
                                    readOnly={true}
                                  />
                                </div>
                              )}
                              {!details.material && (
                                <div className="d-flex">
                                  <label htmlFor="total" style={{ width: 100 }}>
                                    Total
                                    {/* <span style={{ width: 100 }}>
                             {silverRate * weight + (making + others)}
                           </span> */}
                                  </label>
                                  <input
                                    type="text"
                                    id="total"
                                    className="align-right"
                                    style={{ width: 100 }}
                                    value={
                                      silverRate * weight + (making + others)
                                    }
                                    readOnly={true}
                                  />
                                </div>
                                // <p>
                                //   total:
                                //   <span style={{ width: 100 }}>
                                //     {weight * (making + others)}
                                //   </span>
                                // </p>
                              )}
                            </div>
                          </div>

                          <div className="d-flex justify-content-end pt-1  ">
                            <button
                              className="btn btn-warning ms-2"
                              onClick={() => handleAdd(each)}
                            >
                              ADD
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </div>
            </div>
            {/* For cart View*/}
            <div className="col-12  col-lg-4  pr-0 pl-0 ">
              <div className="bg-secondary pt-1">
                <div className="d-flex flex-column justify-content-between px-3 pb-1">
                  {/* <div className="d-flex justify-content-between"> */}
                  <div className="d-flex align-items-center justify-content-between">
                    <div
                      className="d-flex "
                      style={{ minwidth: 120, maxwidth: 180, height: 25 }}
                    >
                      <label
                        htmlFor="cust_no"
                        className="font-weight-bold text-white "
                      >
                        Customer&nbsp;
                      </label>
                      <input
                        placeholder="Mobile number"
                        id="cust_no"
                        type="number"
                        style={{ width: 150 }}
                        name="cust_no"
                        onChange={(event) => {
                          setBill({
                            ...bill,
                            [event.target.name]:
                              event.target.value !== ""
                                ? Number(event.target.value)
                                : "",
                          });
                        }}
                        onWheel={(e) => e.target.blur()}
                      />
                    </div>
                    <p className="d-none font-weight-bold text-white pt-2">
                      ITEMS &nbsp;
                      <span className="badge bg-dark  ">{cartItem.length}</span>
                    </p>
                    <i className="fa-solid fa-cart-shopping  ">
                      &nbsp;
                      <span className="badge bg-dark ">{cartItem.length}</span>
                    </i>
                  </div>
                  <div className="col-12 d-flex p-0">
                    <div className="d-flex flex-column   p-0">
                      <label className="text-white" htmlFor="bill_no">
                        Bill No
                      </label>
                      <input
                        type="text"
                        id="bill_no"
                        style={{ width: 100 }}
                        name="bill_no"
                        onChange={(event) => {
                          setBill({
                            ...bill,
                            [event.target.name]:
                              event.target.value !== ""
                                ? Number(event.target.value)
                                : "",
                          });
                        }}
                        onWheel={(e) => e.target.blur()}
                        value={bill.bill_no}
                      />
                    </div>

                    <div className="d-flex flex-column col-4  col-lg-3 pr-5 ">
                      <label htmlFor="datecol" className="text-white">
                        Date
                      </label>
                      <input
                        type="date"
                        id="datecol"
                        style={{ width: 120 }}
                        name="date"
                        onChange={(event) => {
                          setBill({
                            ...bill,
                            [event.target.name]: event.target.value,
                          });
                        }}
                        // onWheel={(e) => e.target.blur()}
                        value={bill.date}
                      />
                    </div>
                  </div>
                </div>
                {/* FOR EACH CART ITEM   */}
                <div className="overflow-auto " style={{ height: "25em" }}>
                  {cartItem.length === 0 ? (
                    <h4 className="text-white text-center pt-5 mt-5 font-weight-bold">
                      NO PRODUCTS IN CART
                    </h4>
                  ) : (
                    cartItem.map((item) => (
                      <div
                        className="bg-secondary px-2 pt-2 pb-1"
                        key={item.id}
                      >
                        <div className="card">
                          <div className="card-body d-flex justify-content-between align-items-center">
                            <div className="d-flex  align-items-center ">
                              <img
                                src={item.image}
                                className="product-image m-1"
                                alt={item.name}
                              />
                              <div className="d-flex flex-column">
                                <h4 className="fs-6 ">{item.name}</h4>

                                <h4 className="fs-6 ">
                                  {item.price.toLocaleString("hi-IN", {
                                    style: "currency",
                                    currency: "INR",
                                  })}
                                </h4>
                              </div>
                            </div>

                            <div className="px-2">
                              {/* <i className="fa-solid fa-pen-to-square m-1"></i> */}

                              <i
                                className="fa-solid fa-trash"
                                onClick={() => onDelete(item)}
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
              {/* GRAND TOTAL  */}
              <div className=" bg-white p-2 ">
                <div className="d-flex  align-items-center">
                  <h5 className=" font-weight-bold ">Discount</h5>
                  <div className="px-2">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      style={{ width: 150 }}
                      id="dicount"
                    >
                      <option value="Select">select</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="selectdiscount"
                    />
                  </div>
                </div>

                <div className="d-flex  align-items-center pt-2">
                  <div className="pr-1">
                    <button
                      className="bg-dark border-0 rounded text-white "
                      style={{ maxwidth: 180, minWidth: 120, height: 50 }}
                      onClick={handlePayment}
                    >
                      PAY&nbsp;
                      {grdTotal.toLocaleString("hi-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </button>
                  </div>
                  {payUp && (
                    <div className="popup">
                      <div className="d-flex flex-column popup-content text-white bg-secondary text-dark  p-1">
                        <h6 className="text-center ">Payments</h6>
                        <hr className="mt-0" />
                        {/* <div className="d-flex flex-column justify-content-center align-items-start  pl-5"> */}
                        <div className="pl-5">
                          <label htmlFor="cust_name" className="pr-1">
                            Customer
                          </label>
                          <input
                            className="rounded border-0"
                            type="text"
                            id="cust_name"
                            name="cust_name"
                            onChange={(event) => {
                              setpayDetails({
                                ...payDetails,
                                [event.target.name]: event.target.value,
                              });
                            }}
                          />
                        </div>
                        <div className="pl-5">
                          <label htmlFor="saleby" className="pr-1">
                            Sale By
                          </label>
                          <select
                            id="saleby"
                            className="rounded border-0"
                            style={{ width: 180 }}
                            type="text"
                            name="sale_by"
                            value={payDetails.sale_by}
                            onChange={(event) => {
                              setpayDetails({
                                ...payDetails,
                                [event.target.name]:
                                  event.target.value !== ""
                                    ? event.target.value
                                    : "",
                              });
                            }}
                          >
                            <option value="Select">Select</option>
                            <option value="Kumar">kumar</option>
                          </select>
                        </div>
                        <div className="d-flex justify-content-end pr-5 ">
                          <input
                            id="splitbill"
                            className="pl-5"
                            type="checkbox"
                          />
                          <label htmlFor="splitbill">Split Bill</label>
                        </div>
                        <div className="d-flex pl-5">
                          <div className="d-flex flex-column">
                            <label htmlFor="paymenttype">Payment type</label>
                            <select
                              id="paymenttype"
                              name="payment_type"
                              onChange={(event) => {
                                setpayDetails({
                                  ...payDetails,
                                  [event.target.name]:
                                    event.target.value !== ""
                                      ? event.target.value
                                      : "",
                                });
                              }}
                            >
                              <option value="Cash">Cash</option>
                              <option value="UPI">UPI</option>
                              <option value="Credit Card">Credit Card</option>
                            </select>
                          </div>
                          <div className="d-flex flex-column pl-2">
                            <label htmlFor="amttendered">Amt Tendered</label>
                            <input
                              id="amttendered"
                              type="number"
                              style={{ width: 120 }}
                              onWheel={(e) => e.target.blur()}
                            />
                          </div>
                        </div>
                        <div className="pl-5">
                          <label htmlFor="billamount">Bill Amount&nbsp;</label>
                          <span className="text-danger">
                            {grdTotal.toLocaleString("hi-IN", {
                              style: "currency",
                              currency: "INR",
                            })}
                          </span>
                        </div>
                        <div className="pt-3 d-flex  pl-5">
                          <button
                            className="border-0 rounded p-2 mr-3"
                            onClick={handletotalbill}
                          >
                            Total Bill
                          </button>
                          <button
                            className="border-0 rounded p-2"
                            onClick={handlePayUp}
                          >
                            Cancel
                          </button>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                  )}
                  <div className="pr-1">
                    <button
                      className="bg-dark border-0 rounded text-white"
                      style={{ width: 150, height: 50 }}
                      onClick={handleCancel}
                    >
                      CANCEL
                    </button>
                  </div>

                  {/* <div className="pr-1">
                    <button
                      className="bg-dark border-0 rounded text-white"
                      style={{ width: 100, height: 50 }}
                      onClick={handleCancel}
                    >
                      HOLD
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
