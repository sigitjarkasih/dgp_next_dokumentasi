import { Box, Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import React from "react";
import { colorPrimary } from "../../../config/site/site-color";

// OWNER : dgp_next_mall
// LAST EDIT : 11 Sep 2022

const WButton = props => {
    /**
     * DEFINE PROPS
     */
    let _bgColor = props.bgColor;
    let _fontWeight = props.fontWeight;
    let _fontSize = props.fontSize;
    let _icon = props.icon;
    let _loading = props.loading;
    let _onClick = props.onClick;
    let _size = props.size;
    let _title = props.title;
    let _type = props.type;
    let _variant = props.variant;
    let _width = props.width;

    _bgColor = _bgColor === undefined ? colorPrimary : _bgColor;
    _fontWeight = _fontWeight === undefined ? 'bold' : _fontWeight;
    _fontSize = _fontSize === undefined ? 13 : _fontSize;
    _loading = _loading === undefined ? false : _loading;
    _size = _size === undefined ? "large" : _size;
    _variant = _variant === undefined ? "contained" : _variant;

    if (_variant === "outlined") {
        _bgColor = null;
    }
    if (_variant === "link") {
        _bgColor = null;
    }

    return (
        <Button
            variant={_variant}
            type={_type}
            size={_size}
            disabled={_loading}
            onClick={_onClick}
            style={{
                backgroundColor: _bgColor,
                width: _width,
                fontWeight: _fontWeight,
                letterSpacing: 1,
                textTransform: 'none'
            }}
        >
            {
                _loading === true ?
                    <Box display="flex" justifyContent="center" alignItems="center" padding={1}>
                        <CircularProgress size={20} color="secondary" />
                    </Box>
                    :
                    <Box display="flex" justifyContent="center" alignItems="center" fontSize={_fontSize}>
                        {
                            _icon != undefined ? (
                                <>
                                    {_icon}
                                </>
                            ) : ("")
                        }
                        <Box style={{ padding: 2 }}></Box>
                        {_title}
                    </Box>

            }
        </Button>
    )
}

export default WButton;