import React from "react";
import { ErrorMessage, useField } from "formik";
import { TextField, Typography } from "@mui/material";
import { InputAdornment } from "@mui/material";

export default function FormikTextField({ startAdornment, endAdornment, bgColor, ...props }) {
    const [field] = useField(props);
    let newStartAdornment;
    let newEndAdornment;

    if(startAdornment != undefined){
        newStartAdornment = (
            <InputAdornment position="start" variant="standard">
                <Typography variant="body" color={'#BEBEBE'}>{startAdornment}</Typography>
            </InputAdornment>
        )
    }
    
    if(endAdornment != undefined){
        newEndAdornment = (
            <InputAdornment position="start" variant="standard">
                <Typography variant="body">{endAdornment}</Typography>
            </InputAdornment>
        )
    }

    return (
        <div>
            <TextField
                {...field}
                {...props}
                sx={{ width: '100%'}}
                size="small"
                autoComplete="off"
                InputProps={{   
                    startAdornment: newStartAdornment,  
                    endAdornment: newEndAdornment,
                    style: {fontSize: 14, background: bgColor}
                }}
                // style={{border: '1px solid #DBDBDB',}}
            />
            <ErrorMessage
                name={field.name}
                className="errorMessage"
                component="div"
            />
        </div>
    );
}