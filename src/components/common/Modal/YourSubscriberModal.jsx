import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { khowYourSubscriber } from "../../../redux/slices/konwYourSubscriberSlice";

const YourSubscriberModal = ({ subscriberModal, handleClose }) => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("hello",subscriberModal.subscriberId )
    const callApiToKnowYourSubscriber = async () => {
      const response = await dispatch(
        khowYourSubscriber(subscriberModal.subscriberId)
      );
      if (response.payload) {
        setData((prev) => ({
          ...prev,
          fname: response.payload.data.firstName,
          lname: response.payload.data.surName,
          email: response.payload.data.email,
          phone: response.payload.data.phone
        }));
      }
    };
    callApiToKnowYourSubscriber();
  }, [subscriberModal]);

  return (
    <>
      <Dialog
        open={subscriberModal.openModal}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{fontFamily:"Calibri", fontWeight:"700"}}>
          {"Know your subscriber, who purchase."}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Typography sx={{fontFamily:"Calibri", fontWeight:"600"}}>First Name</Typography>  <Typography sx={{fontFamily:"Calibri", fontWeight:"800", fontSize:"18px"}}>{data.fname}</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Typography sx={{fontFamily:"Calibri", fontWeight:"600"}}>Last Name</Typography>  <Typography sx={{fontFamily:"Calibri", fontWeight:"800", fontSize:"18px"}}>{data.lname}</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Typography sx={{fontFamily:"Calibri", fontWeight:"600"}}>Email</Typography>  <Typography sx={{fontFamily:"Calibri", fontWeight:"800", fontSize:"18px"}}>{data.email}</Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
                <Typography sx={{fontFamily:"Calibri", fontWeight:"600"}}>Phone</Typography>  <Typography sx={{fontFamily:"Calibri", fontWeight:"800", fontSize:"18px"}}>{data.phone}</Typography>
            </Box>
            
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default YourSubscriberModal;
