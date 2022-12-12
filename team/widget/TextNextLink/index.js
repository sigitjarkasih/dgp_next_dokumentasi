import React from "react";
import Link from "next/link";
import WText from "../Text";

// OWNER : dgp_next_mall
// LAST EDIT : 21 Aug 2022

const WTextNextLink = props => {
    // var border = props.border === undefined ? '1px solid #DBDBDB' : props.border;
    let color = props.color === undefined ? "inherit" : props.color;
    return (
        <Link
            // target={props.target}
            href={props.href}
            // underline="none"
            // color={color}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
        >
            <a href={props.href} style={{ color: color }}>
                <WText
                    text={props.text}
                    paddingBottom={props.paddingBottom}
                    fontWeight={props.fontWeight}
                // color={color}
                />
            </a>
        </Link>
    );
}

export default WTextNextLink;