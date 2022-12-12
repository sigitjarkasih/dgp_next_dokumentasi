import React from "react";
import { ErrorMessage, useField } from "formik";
import { TextField, Typography } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';

export default function FormikAutocomplete({ options, ...props }) {
    const [field] = useField(props);
    return (
        <div>
            <Autocomplete
                freeSolo
                options={options}
                style={{ fontSize: 14 }}
                renderInput={(params) => (
                    <TextField
                        {...props}
                        {...field}
                        {...params}
                        size="small"
                        InputProps={{
                            ...params.InputProps,
                            style: { fontSize: 14 }
                        }}
                    />
                )}
            />
            {/* <TextField
                {...field}
                {...props}
                sx={{ width: '100%'}}
                size="small"
                autoComplete="off"
                InputProps={{   
                    style: {fontSize: 14, background: bgColor}
                }}
                // style={{border: '1px solid #DBDBDB',}}
            /> */}
            <ErrorMessage
                name={field.name}
                className="errorMessage"
                component="div"
            />
        </div>
    );
}