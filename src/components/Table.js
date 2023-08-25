import "../styles/Table.css";
import fakeData from "../MOCK_DATA.json";
import * as React from "react";
import { useTable } from "react-table";
import AuthenticationService from "../services/AuthenticationService";

const Table = (props) => {
  const [fetchedData,setFetchedData] = React.useState([]);
  // const fetchData = () => {
  //   return getTransaction();
  // }
  const getTransaction = async () => {
    try {
      console.log("Customer id",props.customerId)
      const response  = await AuthenticationService.getRecentTransaction(props.customerId);
      console.log(response);
      return response;
    }catch(error) {
      console.log("Something went wrong while fetching transactions")
    }
  }
  const getData = () => {
    getTransaction().then((response) => {
      setFetchedData(response);
    })
  }
  React.useEffect(() => {
    
    getData();
    // console.log("This ",d)
  },[]);
  const data = React.useMemo(() => fetchedData, [fetchedData]);
  const columns = React.useMemo(
    () => [
      {
        Header: "TransactionId",
        accessor: "transactionId",
      },
      {
        Header: "FromAccount",
        accessor: "fromAc",
      },
      {
        Header: "ToAccount",
        accessor: "toAc",
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
        accessor: "transactionTypeId",
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
