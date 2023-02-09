import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


 
function BasicTable(props) {

  // const [colHeaders, setColHeaders] = useState([]);
	// const [rows, setRows] = useState([]);

  // const fetchData = async () => {
  //     const APIdata = await fetch(`http://localhost:8080/api/views/film`);
  //     const data =  await APIdata.json();
  //     setColHeaders(data.attributeTitles);
  //     setRows(data.attributeValues);
  // }

  // useEffect(() => {
  //     fetchData();
  // },[]);



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           {props.colHeaders.map((colHeader,index)=> (<TableCell key={index.toString()}>{colHeader}</TableCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row,i) => (
            <TableRow
              key={i}>
                {props.colHeaders.map((colHeader,j) => (
                  <TableCell key={j}  align="left">{row[j]}</TableCell>
                ))}
            </TableRow>
          ))}
          </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;

// key={`${indeks}${index}`}