import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from "react-redux";
import { blockUser } from "../../../redux/slices/blockUserSlice";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const BlockModal = ({ isOpen, handleClose, id, block, onSuccess}) => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const value = {
        "subscriberId": id,
        "block": !block
    }
    const dispatch = useDispatch();
    const blocOrUnblockkUser = async () => {
        try {
            await dispatch(blockUser(value));

            setSnackbarMessage(`${block ? "Unblock" : "Block"} successful`);
            setSnackbarOpen(true);
            if (onSuccess) {
                onSuccess();
              }
    
            handleClose();
          } catch (error) {
            console.error("Error blocking or unblocking:", error);
          }
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
    
        setSnackbarOpen(false);
      };
    
  return (
    <>
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {block?"Unblock":"Block"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
         Are you sure, you want to {block?"unblock":"block"} this subscriber?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={blocOrUnblockkUser} autoFocus>
            {block?"Unblock":"Block"}
        </Button>
      </DialogActions>
    </Dialog>
    <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success"
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default BlockModal;
