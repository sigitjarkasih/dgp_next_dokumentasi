import React from "react";

// OWNER : dgp_next_mall
// LAST EDIT : 21 Aug 2022

const WFormField = props => {
    // var border = props.border === undefined ? '1px solid #DBDBDB' : props.border;
    // let borderRadius = props.borderRadius === undefined ? 10 : props.borderRadius;
    return (
        <div
            style={{
                paddingTop: 10,
                paddingBottom: 10
            }}
        >
            <div style={{ fontWeight: 'bold', fontSize: 15 }}>
                {props.label}
            </div>
            <div style={{ margin: 5 }}></div>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default WFormField;