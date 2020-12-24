import React from "react";
import { Box, TextField, TextFieldProps } from "@material-ui/core";

const InputComponent: React.FC<TextFieldProps> = (props) => {
     return (
          <Box>
               <TextField {...props} />
          </Box>
     );
};

export default InputComponent;
