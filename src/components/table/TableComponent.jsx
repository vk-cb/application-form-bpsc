import React from 'react';

function TableComponent({ columns, data }) {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex}>
                <input
                  type="text"
                  name={`${column}-${rowIndex}`} 
                  value={row[column]}
                  
                  // onChange={(e) => handleInputChange(e, rowIndex, column)}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;


// here how to use the table function

// import React from 'react';
// import TableComponent from './TableComponent';

// export function ExampleComponent() {
//   const exampleColumns = ['id', 'name', 'age'];

//   const exampleData = [
//     { id: 1, name: 'John Doe', age: 25 },
//     { id: 2, name: 'Jane Doe', age: 30 },
//     // Add more data as needed
//   ];

//   return (
//     <div>
//       <h2>Example Table</h2>
//       <TableComponent columns={exampleColumns} data={exampleData} />
//     </div>
//   );
// }


/* Add these styles to your CSS file or style component */
// .custom-table {
//     width: 100%;
//     border-collapse: collapse;
//     margin-top: 10px;
//   }
  
//   .custom-table th, .custom-table td {
//     border: 1px solid #ddd;
//     padding: 8px;
//     text-align: left;
//   }
  
//   .custom-table th {
//     background-color: #f2f2f2;
//   }
  
 

