import React, { useEffect, useState } from "react";
import { SubscriberCard, SubscriberHeader, Warrper } from "./SubscriberStyle";
import { IconButton, InputBase, Paper } from "@mui/material";
import { CancelIcon, SearchIcon } from "../../utils/icons";
import {
  AspectRatio,
  Button,
  Card,
  CardContent,
  CardOverflow,
  Divider,
  Typography,
} from "@mui/joy";
import { useDispatch } from "react-redux";
import { myCourse } from "../../redux/slices/mycourseSlice";
import YourSubscriberModal from "../../components/common/Modal/YourSubscriberModal";

const Subscriber = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [subscriberModal, setSubcriberModal] = useState({
    openModal:false,
    subscriberId:"",
  })
  const searchText = (e) => {
    setText(e.target.value);
    filterData(e.target.value)
  };

  const clearText = ()=>{
    setText("");
    setFilteredData(data);
  }

  const filterData = (searchText) => {
    if (searchText === null || searchText.trim() === "") {
      setFilteredData(data);
    }else{
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
    }
  };

  useEffect(() => {
    const callApiMyCourse = async () => {
      let data = {
        creatorId: localStorage.getItem("userID"),
      };
      const response = await dispatch(myCourse(data));
      console.log(response.payload.data)
      setData(response.payload.data);
      setFilteredData(response.payload.data);
    };
    callApiMyCourse();
  }, [dispatch]);


  const knowYourSubscriber = (id) =>{
    console.log(id)
    setSubcriberModal((prev)=>({...prev, openModal:true, subscriberId:id}))
  }

  const closeSubscriberModal = ()=>{
    setSubcriberModal((prev)=>({...prev, openModal:false}))
  }


  return (
    <Warrper>
      <SubscriberHeader>
        <Typography sx={{ fontSize: ["18px","30px"], fontWeight: "700" }}>
          Our Subscriber ({data.length > 0 ? data.length : 0})
        </Typography>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width:200,
          }}
        >
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <SearchIcon />
          </IconButton>
          <InputBase
            value={text}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search by course"
            onChange={searchText}
          />
          {text !== "" ? (
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={clearText}
            >
              <CancelIcon />
            </IconButton>
          ) : (
            ""
          )}
        </Paper>
      </SubscriberHeader>
      <SubscriberCard>
        {filteredData.map((item, index) => {
          const dateObject = new Date(item.createdAt);
          const formattedDate = dateObject.toLocaleDateString();
          return (
            <Card
              key={index}
              variant="outlined"
              sx={{
                width: ["100%", "250px"],
                margin: "0 5px 5px 0",
                transition: "transform 0.3s",
              }}
              className="hoverable-card"
            >
              <CardOverflow>
                <AspectRatio ratio="2">
                  <img src={item.thumbnail} loading="lazy" alt="" />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography level="title-md">{item.title}</Typography>
                <Typography
                  level="body-sm"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  Your subscriber{" "}
                  <Button variant="outlined" size="sm" onClick={()=>knowYourSubscriber(item.userId)}>
                    Subscriber
                  </Button>
                </Typography>
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level1" }}
              >
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    ₹{item.price}
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    {formattedDate}
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          );
        })}
      </SubscriberCard>
      <YourSubscriberModal subscriberModal={subscriberModal} handleClose={closeSubscriberModal}/>
    </Warrper>
  );
};

export default Subscriber;
