import React from "react";
// import WFormField from "../FormField";

// OWNER : dgp_next_mall
// LAST EDIT : 21 Aug 2022

const WText = props => {
    // var border = props.border === undefined ? '1px solid #DBDBDB' : props.border;
    let paddingBottom = props.paddingBottom === undefined ? 10 : props.paddingBottom;
    let paddingTop = props.paddingTop === undefined ? 0 : props.paddingTop;
    let variant = props.variant;
    let fontWeight = props.fontWeight;
    let fontSize = props.fontSize === undefined ? 13 : props.fontSize;

    if (variant === 'h1') {
        fontSize = 25;
        fontWeight = 'bolder'
    }
    if (variant === 'h2') fontSize = 18;
    if (variant === 'h3') fontSize = 16;
    if (variant === 'h4') fontSize = 14;
    if (variant === 'menu') fontSize = 13;

    return (
        <p
            style={{
                fontSize: fontSize,
                margin: 0,
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                fontWeight: fontWeight,
                color: props.color,
                // alignContent: 'center'
                // backgroundColor: 'yellow'
            }}
        >
            {props.text}
        </p>
    );
}

export default WText;