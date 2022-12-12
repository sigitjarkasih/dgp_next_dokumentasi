import React from "react";
import { ErrorMessage, useField } from "formik";

export default function FormikTextareaField({ ...props }) {
    const [field] = useField(props);
    return (
        <div>
            <textarea                
                style={
                    {
                        width: '100%',
                        padding: 12,
                        fontSize: 14, 
                        border: '1px solid #DBDBDB',
                        borderRadius: 4
                    }
                }
                type="text"
                {...field}
                {...props}
                autoComplete="off"
            ></textarea>
            
            <ErrorMessage
                name={field.name}
                className="errorMessage"
                component="div"
            />
        </div>
    );
}