import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";
import AddItemCreationModal from "./AddItemCreationModal";

function ItemCreation() {
  const [tableData, setTableData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    
  ];
  

  return (
    <div className="p-10">
      <div className="flex justify-between items-center space-x-2">
        <div className="flex space-x-2 items-center w-5/12">
          <TextField
            size="small"
            fullWidth
            label="First Name/Mob Number"
          />
          <button
            type="button"
            className="bg-indigo-900 text-white rounded p-2"
          >
            <SearchIcon />
          </button>
        </div>
        <button
          className="bg-indigo-900 text-white p-2 rounded whitespace-nowrap"
          onClick={()=>{handleOpenModal()
          setEditRow(null)
          }}
        >
          + Add
        </button>
      </div>
      
               
      <AddItemCreationModal
        handleOpenModal={openModal}
        handleCloseModal={handleCloseModal}
        data={tableData}
        setData={setTableData}
        editRow={editRow}
        setEditRow={setEditRow}
      />

      <div className="mt-5">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell  >Mobile No:</TableCell>
            <TableCell  >Age</TableCell>
            <TableCell  >Active/UnActive</TableCell>
            <TableCell  >Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell  >{row.calories}</TableCell>
              <TableCell  >{row.fat}</TableCell>
              <TableCell  >{row.carbs}</TableCell>
              <TableCell  >{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  );
}

export default ItemCreation;