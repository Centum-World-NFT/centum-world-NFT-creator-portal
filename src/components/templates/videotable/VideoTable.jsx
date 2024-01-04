import React, { useEffect, useState } from "react";
import { TableCellName, TableHeader } from "./VideoTableStyle";
import {
  Button,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
} from "@mui/material";
import { DeleteIcon, EditIcon, ThreeIcon, ViewIcon } from "../../../utils/icons";
import { fetchPlaylistDetails } from "../../../redux/slices/playlistFetchSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const VideoTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [courseid, setCourseID] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [editID, setEditID] = useState('');

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, value, editID) => {
    setAnchorEl(event.currentTarget);
    setCourseID(value)
    setEditID(editID)
  };
  const handleClose = (id,text) => {
    setAnchorEl(null);
    console.log(id, text);
    if(text === 'view'){
      navigate(`/creatorDashboard/yourVideos/${id}`)
    }
    if(text === 'edit'){
      navigate(`/creatorDashboard/editPlaylist/${id}`)
    }
    if(text === 'delete'){
      navigate(`/creatorDashboard/yourVideos/${id}`)
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
  };

  useEffect(() => {
    const callApiToPlaylistData = async () => {
      try {
        const data = await dispatch(
          fetchPlaylistDetails({ creatorId: localStorage.getItem("userID") })
        );
        setData(data.payload.playlists);
      } catch (error) {}
    };
    callApiToPlaylistData();
  }, [dispatch]);
  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedRows = data.slice(startIndex, endIndex);
  console.log(displayedRows);

  return (
    <>

      <TableContainer component={Paper} sx={{ mt: "1rem" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeader>
            <TableRow>
              <TableCellName>Cours name</TableCellName>
              <TableCellName align="right">Price</TableCellName>
              <TableCellName align="right">Course ID</TableCellName>
              <TableCellName align="right">Date</TableCellName>
              <TableCellName align="right">Actions</TableCellName>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedRows.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.playlist_title}
                </TableCell>
                <TableCell align="right">₹{item.price}</TableCell>
                <TableCell align="right">{item.course_id}</TableCell>
                <TableCell align="right">{item._id}</TableCell>
                <TableCell align="right">
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={(event)=>handleClick(event, item.course_id, item._id)}
                  ><ThreeIcon/></Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={5}
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={()=>handleClose(courseid,'view')}><ViewIcon/>&nbsp;View</MenuItem>
        <MenuItem onClick={()=>handleClose(editID,'edit')}><EditIcon/> &nbsp; Edit</MenuItem>
        <MenuItem onClick={()=>handleClose(courseid,'delete')}><DeleteIcon/> &nbsp;Delete</MenuItem>
      </Menu>
    </>
  );
};

export default VideoTable;
