import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { allRevAndSubs } from "../../../redux/slices/revAndSubsSlice";
import { MenuItem, FormControl, Select, InputLabel, Typography } from "@mui/material";
import { SelectFormContainer } from "./OverviewChartStyle";
import { getMonthName } from "../../../utils/month";


const OverviewChart = () => {
  const dispatch = useDispatch();
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  // const data = [];
  useEffect(() => {
    const callApiToGetAllRevAndSubs = async () => {
      try {
        const response = await dispatch(allRevAndSubs());
        setAllData(response.payload.data)
        if(response.payload.status){
          callFirstTimeData(response.payload.data)
        }
      } catch (error) {}
    };
    callApiToGetAllRevAndSubs();
  }, [dispatch]);

  const years = [];
  const currentYear = new Date().getFullYear();
  for (let year = currentYear; year >= currentYear - 4; year--) {
    years.push(year);
  }

  const callFirstTimeData = (mydata) => {
    //  setData([]);
     console.log(mydata)
    const filteredData = mydata.filter(item => item.year === currentYear);
    const updatedData = [];
    for(let i = 1; i <= 12; i++){
      const monthData = filteredData.filter(item =>item.month === i)
      if(monthData.length > 0){
        console.log(monthData[0].totalRevenue)
        updatedData.push({ name: getMonthName(i) , Revenue: monthData[0].totalRevenue, Subscriber: monthData[0].totalSubscribersCount })
      }else{
        updatedData.push({ name: getMonthName(i), Revenue: 0, Subscriber: 0 });
      }
    }
    setData(updatedData)
  }

  const changeYear = (e)=>{
    setData([]);
    const filteredData = allData.filter(item => item.year === e.target.value);
    const updatedData = [];
    for(let i = 1; i <= 12; i++){
      const monthData = filteredData.filter(item =>item.month === i)
      if(monthData.length > 0){
        console.log(monthData[0].totalRevenue)
        updatedData.push({ name: getMonthName(i) , Revenue: monthData[0].totalRevenue, Subscriber: monthData[0].totalSubscribersCount })
      }else{
        updatedData.push({ name: getMonthName(i), Revenue: 0, Subscriber: 0 });
      }
    }
    setData(updatedData)
  }

  console.log(data);

  return (
    <>
      <SelectFormContainer>
        <Typography sx={{fontFamily:"Calibri", fontSize:"18px", fontWeight:'700'}}>Revenu & Subscriber</Typography>
        <FormControl sx={{ width: "250px" }}>
          <Select
            labelId="year-label"
            id="year-select"
            defaultValue={currentYear}
            onChange={(e)=>changeYear(e)}
          >
            <MenuItem>Select Year</MenuItem>
            {years.map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </SelectFormContainer>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 5, left: 5, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="Revenue"
            stroke="#D43790"
            fill="#D43790"
          />
          <Area
            type="monotone"
            dataKey="Subscriber"
            stroke="#0066CC"
            fill="#0066CC"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default OverviewChart;
