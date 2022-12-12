import React from "react";
import Link from "next/link";

// OWNER : next_admin
// LAST EDIT : 27 Sep 2022

const WLink = props => {
    /**
     * DEFINE PROPS
     */

    let _children = props.children;
    let _href = props.href;
    return (
        <Link
            // target={props.target}
            href={_href}
            // underline="none"
            // color={color}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
        >
            {_children}
        </Link>
    );
}

export default WLink;