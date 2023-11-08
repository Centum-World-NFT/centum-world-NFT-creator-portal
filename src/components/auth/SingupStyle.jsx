import { TextField } from "@mui/material";
import {styled} from "@mui/system";

export const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "white"
      },
  
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "blue"
        },
        "&:hover fieldset": {
          borderColor: "white"
        },
        "&.Mui-focused fieldset": {
          borderColor: "blue"
        }
      }
})