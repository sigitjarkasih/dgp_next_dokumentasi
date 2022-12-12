import React from "react";
import { Link } from "@mui/material"
import WText from "../Text";

// OWNER : dgp_next_mall
// LAST EDIT : 21 Aug 2022

const WTextLink = props => {
    // var border = props.border === undefined ? '1px solid #DBDBDB' : props.border;
    let color = props.color === undefined ? "inherit" : props.color;
    return (
        <Link
            target={props.target}
            href={props.href}
            // underline="none"
            // color={color}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
        >
            <WText
                text={props.text}
                paddingBottom={props.paddingBottom}
                fontWeight={props.fontWeight}
                fontSize={props.fontSize}
                color={color}
                variant={props.variant}
            />
        </Link>
    );
}

export default WTextLink;