import React from "react";

function TableResuable({ coulmn, data }) {
  coulmn = ["id", "data", "attendance"];
  data = [
    {
      id: 1,
      data: "this data",
      attendance: "52",
    },
    {
      " id": 2,
      data: "this data1",
      attendance: "53",
    },
    {
      id: 3,
      data: "this data2",
      attendance: "54",
    },
  ];

  return (
    <div>
      <table>
        <tbody>
          <thead>
            <tr>
              {coulmn.map((data, index) => (
                <th>{data}</th>
              ))}
            </tr>
          </thead>
          <tr>
            {data.map((data, index) => (
              <td key={index}>{data.data}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableResuable;
