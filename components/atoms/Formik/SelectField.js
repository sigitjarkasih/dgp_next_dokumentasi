import { ErrorMessage, useField } from "formik";
import React from 'react'
import Select from "react-select"


export default function FormikSelectField({ placeholder, ...props }) {
  const [field] = useField(props);
  placeholder = placeholder === undefined ? "Choose..." : placeholder;
  return (
    <div>
        <Select
            placeholder={placeholder}
            {...field}
            {...props}
        />
        <ErrorMessage
            name={field.name}
            className="errorMessage"
            component="div"
        />
    </div>
  );
}
