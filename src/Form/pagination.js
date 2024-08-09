import React, { useState, useEffect } from "react";
// import { styled } from "@mui/system";
// import {
//   TablePagination,
//   tablePaginationClasses as classes,
// } from "@mui/base/TablePagination";
import Sai from "./sai";

// import axios from "axios";

export default function Pagination() {
  const [data, setData] = useState([]);
  const [hide, setHide] = useState(false);
  const [user, setUser] = useState([data[0]]);
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleView = (row) => {
    setUser(row);
    setHide((prevState) => !prevState.hide);
  };

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  // useEffect(() => {
  //   axios.get("http://localhost:4000/employee").then((response) => {
  //     setData(response.data);
  //     console.log(data);
  //   });
  // }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:4000/employee");
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
  }, []);

  return (
    <React.Fragment>
      <div
        // sx={{ maxWidth: "100%" }}
        className="container  "
      >
        <div className="row">
          <table
            aria-label="custom pagination "
            className="table table-responsive table-sm border border-secondary mt-5   "
            // ref={pdfRef}
            id="tabledata"
          >
            <thead className="table-light">
              <tr>
                <td>S.NO</td>
                <td>EMP.ID</td>
                <td>NAME</td>
                <td>BIOMETRIC</td>
                <td>MOBILE</td>
                <td>DESIGNATION</td>
                <td>DEPARTMENT</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td align="left">{row.emp_id}</td>
                  <td align="left">{row.emp_name} </td>
                  <td align="left">{row.bio_id}</td>
                  <td align="left">{row.mobile_no}</td>
                  <td align="left">{row.designation}</td>
                  <td align="left">{row.department}</td>
                  <td>
                    <button className="bg bg-transparent border-0">
                      <i
                        className="fa-solid fa-eye bg bg-white border-0 rounded mt-2 cursor-pointer"
                        id="button"
                        onClick={() => handleView(row)}
                      ></i>
                    </button>
                  </td>
                </tr>
              ))}
              {/* {emptyRows > 0 && (
              <tr style={{ height: 41 * emptyRows }}>
                <td colSpan={3} aria-hidden />
              </tr>
            )} */}
            </tbody>
            {/* <tfoot id="foot" className="border-0">
            <tr className="border-0">
              <CustomTablePagination
                className="border-0"
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    "aria-label": "rows per page",
                  },
                  // actions: {
                  //    showFirstButton: true,
                  //    showLastButton: true,
                  // },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </tr>
          </tfoot> */}
          </table>
        </div>

        {hide && <Sai userData={user} />}

        {/* <CustomTablePagination
          id="foot"
          rowsPerPageOptions={[5, 15, 25, { label: "All", value: -1 }]}
          colSpan={3}
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          slotProps={{
            select: {
              "aria-label": "rows per page",
            },
            // actions: {
            //    showFirstButton: true,
            //    showLastButton: true,
            // },
          }}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}

        {/* <button
          id="button"
          className="bg bg-primary border-0 rounded mt-2"
          onClick={handleDownload}
        >
          Print
        </button> */}
      </div>
    </React.Fragment>
  );
}

// function createData(name, calories, fat) {
//   return { name, calories, fat };
// }

// const rows = [
//   createData("Cupcake", 305, 3.7),
//   createData("Donut", 452, 25.0),
//   createData("Eclair", 262, 16.0),
//   createData("Frozen yoghurt", 159, 6.0),
//   createData("Gingerbread", 356, 16.0),
//   createData("Honeycomb", 408, 3.2),
//   createData("Ice cream sandwich", 237, 9.0),
//   createData("Jelly Bean", 375, 0.0),
//   createData("KitKat", 518, 26.0),
//   createData("Lollipop", 392, 0.2),
//   createData("Marshmallow", 318, 0),
//   createData("Nougat", 360, 19.0),
//   createData("Oreo", 437, 18.0),
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

// const grey = {
//   50: "#F3F6F9",
//   100: "#E5EAF2",
//   200: "#DAE2ED",
//   300: "#C7D0DD",
//   400: "#B0B8C4",
//   500: "#9DA8B7",
//   600: "#6B7A90",
//   700: "#434D5B",
//   800: "#303740",
//   900: "#1C2025",
// };

// const Root = styled("div")(
//   ({ theme }) => `
//   table {
//     font-family: 'IBM Plex Sans', sans-serif;
//     font-size: 0.875rem;
//     border-collapse: collapse;
//     width: 100%;
//   }

//   td,
//   th {
//     border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
//     text-align: left;
//     padding: 8px;
//   }

//   th {
//     background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
//   }
//   `
// );

// const CustomTablePagination = styled(TablePagination)`
//   & .${classes.toolbar} {
//     display: flex;
//     flex-direction: row;
//     align-items: flex-start;
//     gap: 10px;

//     @media (min-width: 768px) {
//       flex-direction: row;
//       align-items: center;
//     }
//   }

//   & .${classes.selectLabel} {
//     margin: 0;
//   }

//   & .${classes.displayedRows} {
//     margin: 0;
//     width: 100px;

//     @media (min-width: 768px) {
//       margin-left: auto;
//     }
//   }

//   & .${classes.spacer} {
//     display: none;
//   }

//   & .${classes.actions} {
//     display: flex;
//     gap: 0.25rem;
//   }
// `;
