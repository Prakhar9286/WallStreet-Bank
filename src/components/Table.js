import "../styles/Table.css";
import fakeData from "../MOCK_DATA.json";
import * as React from "react";
import { useTable } from "react-table";

function Table() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "TransactionId",
        accessor: "id",
      },
      {
        Header: "FromAccount",
        accessor: "from account",
      },
      {
        Header: "ToAccount",
        accessor: "To_Account",
      },
      {
        Header: "Date",
        accessor: "date",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "TransactionType",
        accessor: "transactiontype",
      },
      {
        Header:"Remarks",
        accessor: "remarks",
      },
      {
        Header:"MaturityInstructions",
        accessor: "MaturityInstructions",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="Table">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
