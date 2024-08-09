import { useRef } from "react";
import html2pdf from "html2pdf.js";

function Registrations({ data }) {
  const pdfRef = useRef();
  const handleDownload = async () => {
    const element = document.getElementById("page");

    const opt = {
      margin: 1,
      filename: "myfile.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2.0 },
      jsPDF: { unit: "in", format: "a4", orientation: "landscape" },
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();

    // Old monolithic-style usage:
    html2pdf(element, opt);
  };

  return (
    <>
      <div className="container " id="page">
        <div className="row pt-3 ">
          <div ref={pdfRef}>
            <table className="table table-hover overflow-auto table-responsive bg-light">
              <thead>
                <tr>
                  <th className="bg-transparent" scope="col">
                    S.NO
                  </th>
                  <th className="bg-transparent" scope="col">
                    EMP ID
                  </th>
                  <th className="bg-transparent" scope="col">
                    NAME
                  </th>
                  <th className="bg-transparent" scope="col">
                    BIOMETRIC
                  </th>
                  <th className="bg-transparent" scope="col">
                    MOBILE
                  </th>
                  <th className="bg-transparent" scope="col">
                    DESIGNATION
                  </th>
                  <th className="bg-transparent" scope="col">
                    DEPARTMENT
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>4211</td>
                  <td>sai kumar</td>
                  <td>4211</td>
                  <td>8790634739</td>
                  <td>Intern</td>
                  <td>Development</td>
                </tr>
              </tbody>
            </table>

            <div className="d-flex justify-content-end">
              <button
                type="submit"
                id="print"
                className="bg bg-primary border-0 rounded text-white mx-2"
                onClick={handleDownload}
              >
                Print
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registrations;

// https://shamaahlawat.medium.com/page-split-using-jspdf-and-html2canvas-in-react-js-while-downloading-pdf-6c75da960019
