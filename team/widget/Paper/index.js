import React from "react";
import { Box, Paper } from '@mui/material';

// OWNER : dgp_next_mall
// LAST EDIT : 06 Sep 2022

const WPaper = props => {

    /**
     * DEFINE PROPS
     */
    let _children = props.children;
    let _elevation = props.elevation;
    let _my = props.my;
    let _p = props.p;

    _elevation = _elevation === undefined ? 1 : _elevation;
    _my = _my === undefined ? 3 : _my;
    _p = _p === undefined ? 3 : _p;

    return (
        <Box my={_my}>
            <Paper elevation={_elevation}>
                <Box p={_p}>
                    {_children}
                </Box>
            </Paper>
        </Box>
    );
}

export default WPaper;