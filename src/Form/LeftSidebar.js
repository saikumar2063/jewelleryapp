import React from "react";

function LeftSidebar() {
  return (
    <div>
      <div className="container  ">
        <div className="row ">
          <a
            className="btn btn-dark  "
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
            data-toggle="tooltip"
            data-placement="right"
            title="Menu"
          >
            <i className="fa-solid fa-bars"></i>
          </a>

          <div
            className="offcanvas offcanvas-start"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header ">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Sidebars
              </h5>
              <hr className="text-dark" />
              <button
                type="button"
                className="btn-close text-reset text-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            {/* <div className="offcanvas-body">
              <div>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </div>
              <div className="dropdown mt-3">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                >
                  Dropdown button
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <p className="dropdown-item">Action</p>
                  </li>
                  <li>
                    <p className="dropdown-item">Another action</p>
                  </li>
                  <li>
                    <p className="dropdown-item">Something else here</p>
                  </li>
                </ul>
              </div>
            </div> */}
            <div className="offcanvas-body">
              <div className="dropdown mt-3">
                <div className="d-flex">
                  <i className="fa-solid fa-house pt-1 px-1"></i>
                  <p className="dropdown-item ">Home</p>
                </div>

                <div className="d-flex">
                  <i className="fa-solid fa-gauge pt-1 px-1"></i>
                  <p className="dropdown-item ">Dashboard</p>
                </div>

                <div className="d-flex">
                  <i className="fa-solid fa-table pt-1 px-1"></i>
                  <p className="dropdown-item ">Orders</p>
                </div>

                <div className="d-flex">
                  <i className="fa-solid fa-box pt-1 px-1"></i>
                  <p className="dropdown-item ">Products</p>
                </div>

                <div className="d-flex">
                  <i className="fa-solid fa-user pt-1 px-1"></i>
                  <p className="dropdown-item ">Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
