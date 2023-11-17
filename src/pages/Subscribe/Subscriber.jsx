import React, { useState } from "react";
import {
  Filtercard,
  SubscriberCard,
  SubscriberContainer,
  SubscriberDetails,
  SubscriberHeading,
  Warrper,
} from "./SubscriberStyle";
import { Button, Divider, TextField, Typography } from "@mui/material";
import image from "../../utils/cardimages/image.jpg";
import { FilterIcon, INR } from "../../utils/icons";
import BlockIcon from "@mui/icons-material/Block";
import BlockModal from "../../components/common/Modal/BlockModal";

const Subscriber = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleButtonClick = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
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
        <SubscriberCard>
          <SubscriberHeading>
            <Typography style={{ fontSize: "18px", fontWeight: "700" }}>
              Profile
            </Typography>
            <img
              src={image}
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
          </SubscriberHeading>
          <Divider sx={{ color: "red", margin: "10px 0" }} />
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>First name</Typography>
            <Typography>Arjun</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Last name</Typography>
            <Typography>Mandal</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Subscribe</Typography>
            <Typography>AWS</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Price</Typography>
            <Typography>
              <INR />
              9999
            </Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Joining date</Typography>
            <Typography>12/11/2023</Typography>
          </SubscriberDetails>
          <Divider sx={{ color: "red", margin: "10px 0" }} />
          <Button
            component="label"
            variant="contained"
            startIcon={<BlockIcon />}
            fullWidth
            onClick={handleButtonClick}
          >
            Block
          </Button>
        </SubscriberCard>

        <SubscriberCard>
          <SubscriberHeading>
            <Typography style={{ fontSize: "18px", fontWeight: "700" }}>
              Profile
            </Typography>
            <img
              src={image}
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
          </SubscriberHeading>
          <Divider sx={{ color: "red", margin: "10px 0" }} />
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>First name</Typography>
            <Typography>Givind</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Last name</Typography>
            <Typography>Kumar</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Subscribe</Typography>
            <Typography>Angular</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Price</Typography>
            <Typography>
              <INR />
              4555
            </Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Joining date</Typography>
            <Typography>23/11/2023</Typography>
          </SubscriberDetails>
          <Divider sx={{ color: "red", margin: "10px 0" }} />
          <Button
            component="label"
            variant="contained"
            startIcon={<BlockIcon />}
            fullWidth
            onClick={handleButtonClick}
          >
            Block
          </Button>
        </SubscriberCard>

        <SubscriberCard>
          <SubscriberHeading>
            <Typography style={{ fontSize: "18px", fontWeight: "700" }}>
              Profile
            </Typography>
            <img
              src={image}
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
          </SubscriberHeading>
          <Divider sx={{ color: "red", margin: "10px 0" }} />
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>First name</Typography>
            <Typography>Rahul</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Last name</Typography>
            <Typography>Kumar</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Subscribe</Typography>
            <Typography>React JS</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Price</Typography>
            <Typography>
              <INR />
              11,999
            </Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Joining date</Typography>
            <Typography>12/12/2023</Typography>
          </SubscriberDetails>
          <Divider sx={{ color: "red", margin: "10px 0" }} />
          <Button
            component="label"
            variant="contained"
            startIcon={<BlockIcon />}
            fullWidth
            onClick={handleButtonClick}
          >
            Block
          </Button>
        </SubscriberCard>

        {/* ------------------- */}
        <SubscriberCard>
          <SubscriberHeading>
            <Typography style={{ fontSize: "18px", fontWeight: "700" }}>
              Profile
            </Typography>
            <img
              src={image}
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
          </SubscriberHeading>
          <Divider sx={{ color: "red", margin: "10px 0" }} />
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>First name</Typography>
            <Typography>Arjun</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Last name</Typography>
            <Typography>Mandal</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Subscribe</Typography>
            <Typography>AWS</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Price</Typography>
            <Typography>
              <INR />
              9999
            </Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Joining date</Typography>
            <Typography>12/11/2023</Typography>
          </SubscriberDetails>
          <Divider sx={{ color: "red", margin: "10px 0" }} />
          <Button
            component="label"
            variant="contained"
            startIcon={<BlockIcon />}
            fullWidth
            onClick={handleButtonClick}
          >
            Block
          </Button>
        </SubscriberCard>

        <SubscriberCard>
          <SubscriberHeading>
            <Typography style={{ fontSize: "18px", fontWeight: "700" }}>
              Profile
            </Typography>
            <img
              src={image}
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
          </SubscriberHeading>
          <Divider sx={{ color: "red", margin: "10px 0" }} />
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>First name</Typography>
            <Typography>Givind</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Last name</Typography>
            <Typography>Kumar</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Subscribe</Typography>
            <Typography>Angular</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Price</Typography>
            <Typography>
              <INR />
              4555
            </Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Joining date</Typography>
            <Typography>23/11/2023</Typography>
          </SubscriberDetails>
          <Divider sx={{ color: "red", margin: "10px 0" }} />
          <Button
            component="label"
            variant="contained"
            startIcon={<BlockIcon />}
            fullWidth
            onClick={handleButtonClick}
          >
            Block
          </Button>
        </SubscriberCard>

        <SubscriberCard>
          <SubscriberHeading>
            <Typography style={{ fontSize: "18px", fontWeight: "700" }}>
              Profile
            </Typography>
            <img
              src={image}
              style={{ width: "30px", height: "30px", borderRadius: "50%" }}
            />
          </SubscriberHeading>
          <Divider sx={{ color: "red", margin: "10px 0" }} />
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>First name</Typography>
            <Typography>Rahul</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Last name</Typography>
            <Typography>Kumar</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Subscribe</Typography>
            <Typography>React JS</Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Price</Typography>
            <Typography>
              <INR />
              11,999
            </Typography>
          </SubscriberDetails>
          <SubscriberDetails>
            <Typography style={{ color: "#828792" }}>Joining date</Typography>
            <Typography>12/12/2023</Typography>
          </SubscriberDetails>
          <Divider sx={{ color: "red", margin: "10px 0" }} />
          <Button
            component="label"
            variant="contained"
            startIcon={<BlockIcon />}
            fullWidth
          >
            Block
          </Button>
        </SubscriberCard>
      </SubscriberContainer>

      <BlockModal isOpen={isModalOpen} handleClose={handleCloseModal} />
    </Warrper>
  );
};

export default Subscriber;
