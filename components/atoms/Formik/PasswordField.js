import React from "react";
import { ErrorMessage, useField } from "formik";

export default function PasswordField({ ...props }) {
    const [field] = useField(props);
    return (
        <div>
            <input
                type="password"
                style={
                    {
                        width: '100%',
                        padding: 12,
                        fontSize: 14, 
                        border: '1px solid #DBDBDB',
                        borderRadius: 4,
                        letterSpacing: 2,
                        fontWeight: 'bolder'
                    }
                }
                {...field}
                {...props}
                autoComplete="off"
            />
            <ErrorMessage
                name={field.name}
                className="errorMessage"
                component="div"
            />
        </div>
    );
}