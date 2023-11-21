import React, { useEffect, useState } from "react";
import {
  Filtercard,
  SubscriberCard,
  SubscriberContainer,
  SubscriberDetails,
  SubscriberHeading,
  Warrper,
} from "./SubscriberStyle";
import { useDispatch, useSelector } from "react-redux";
import { subcriberDetails } from "@/redux/slices/subscribeSlice";
import { Button, Divider, TextField, Typography } from "@mui/material";
import image from "../../utils/cardimages/image.jpg";
import { FilterIcon, INR } from "../../utils/icons";
import BlockIcon from "@mui/icons-material/Block";
import CancelIcon from "@mui/icons-material/Cancel";
import BlockModal from "../../components/common/Modal/BlockModal";

const Subscriber = () => {
  const subscriberState = useSelector((state) => state.subscriber);
  const blockState = useSelector((state) => state.block);
  const [isModalOpen, setModalOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const [block, setBlock] = useState(false);
  const value = {
    creatorId: "65530e583c3030d2f346a1cc",
  };

  const handleButtonClick = (subscriber) => {
    setBlock(subscriber.isBlocked);
    setUserId(subscriber._id);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(subcriberDetails(value));
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Warrper>
      <Typography
        style={{ fontSize: "30px", fontWeight: "700", marginBottom: "15px" }}
      >
        Our subscribers
      </Typography>
      <Filtercard>
        <FilterIcon />
        <TextField
          id="input-with-icon-textfield"
          placeholder="Search by subscriber"
          variant="standard"
          style={{ marginLeft: "10px" }}
        />
      </Filtercard>
      <SubscriberContainer>
        {subscriberState.isLoading ? (
          <Typography>Loading...</Typography>
        ) : subscriberState.isError ? (
          <Typography>Error: {subscriberState.isError}</Typography>
        ) : (
          subscriberState.data &&
          subscriberState.data.data.map((subscriber) => (
            <SubscriberCard key={subscriber._id}>
              <SubscriberHeading>
                <Typography style={{ fontSize: "18px", fontWeight: "700" }}>
                  Profile
                </Typography>
                <img
                  src={image}
                  style={{ width: "30px", height: "30px", borderRadius: "50%" }}
                  alt="Profile Pic"
                />
              </SubscriberHeading>
              <Divider sx={{ color: "red", margin: "10px 0" }} />
              <SubscriberDetails>
                <Typography style={{ color: "#828792" }}>First name</Typography>
                <Typography>{subscriber.firstName}</Typography>
              </SubscriberDetails>
              <SubscriberDetails>
                <Typography style={{ color: "#828792" }}>Last name</Typography>
                <Typography>{subscriber.lastName}</Typography>
              </SubscriberDetails>
              <SubscriberDetails>
                <Typography style={{ color: "#828792" }}>Subscribe</Typography>
                <Typography>{subscriber.subscribe}</Typography>
              </SubscriberDetails>
              <SubscriberDetails>
                <Typography style={{ color: "#828792" }}>Price</Typography>
                <Typography>
                  <INR />
                  {subscriber.price}
                </Typography>
              </SubscriberDetails>
              <SubscriberDetails>
                <Typography style={{ color: "#828792" }}>
                  Joining date
                </Typography>
                <Typography>{formatDate(subscriber.joiningDate)}</Typography>
              </SubscriberDetails>
              <Divider sx={{ color: "red", margin: "10px 0" }} />
              <Button
                component="label"
                variant="contained"
                startIcon={
                  subscriber.isBlocked ? <CancelIcon /> : <BlockIcon />
                }
                fullWidth
                onClick={() => handleButtonClick(subscriber)}
              >
                {subscriber.isBlocked ? "Unblock" : "Block"}
              </Button>
            </SubscriberCard>
          ))
        )}
      </SubscriberContainer>

      <BlockModal
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
        id={userId}
        block={block}
        onSuccess={() => dispatch(subcriberDetails(value))}
      />
    </Warrper>
  );
};

export default Subscriber;
