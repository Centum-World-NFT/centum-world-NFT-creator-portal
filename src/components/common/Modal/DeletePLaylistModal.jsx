import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useDispatch } from "react-redux";
import { deletePlaylist } from "../../../redux/slices/deletePlaylistSlice";
import { toast } from "react-toastify";

const DeletePLaylistModal = ({myId, deletePlaylsit, handleClose}) => {
    const dispatch = useDispatch();
  const deletePlaylistItem = async () =>{
    try {
        console.log(myId)
        const response = await dispatch(deletePlaylist(myId));
        toast.success(response.payload.message) 
        handleClose();
    } catch (error) {
        
    }
    
  }
 
  return (
    <>
      <Dialog
        open={deletePlaylsit}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete playlist"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure, you want to delete this playlist?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={deletePlaylistItem} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeletePLaylistModal;
