import React from "react";
import WFormField from "../FormField";

// OWNER : dgp_next_mall
// LAST EDIT : 5 Sep 2022

const WTextareaField = props => {

    /**
     * DEFINE PROPS
     */
    let _label = props.label;
    let _border = props.border;
    let _borderRadius = props.borderRadius;
    let _fontSize = props.fontSize;
    let _type = props.type;
    let _value = props.value;

    _border = _border === undefined ? "1px solid #DBDBDB" : _border;
    _borderRadius = _borderRadius === undefined ? 10 : _borderRadius;
    _fontSize = _fontSize === undefined ? 14 : _fontSize;
    _type = _type === undefined ? "text" : _type;

    return (
        <WFormField
            label={_label}
            children={
                <textarea
                    style={
                        {
                            width: '100%',
                            padding: 12,
                            fontSize: _fontSize,
                            border: _border,
                            borderRadius: _borderRadius
                        }
                    }
                    type="text"
                    autoComplete="off"
                    onChange={props.onChange}
                    value={_value}
                >
                </textarea>
            }
        />
    );
}

export default WTextareaField;