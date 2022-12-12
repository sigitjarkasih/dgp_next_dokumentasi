import React from "react";
import { Box } from "@mui/material";

// OWNER : dgp_next_mall
// LAST EDIT : 09 Sep 2022

const WBox = props => {
    /**
     * DEFINE PROPS
     */
    let _children = props.children;
    let _display = props.display;
    let _justifyContent = props.justifyContent;
    let _p = props.p;
    let _textAlign = props.textAlign;

    _p = _p === undefined ? 3 : _p;

    return (
        <Box
            display={_display}
            justifyContent={_justifyContent}
            p={_p}
            textAlign={_textAlign}
        >
            {_children}
        </Box>
    );
}

export default WBox;